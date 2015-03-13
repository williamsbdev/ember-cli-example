import Ember from "ember";

var registerWithContainer = function(dirName, application) {
    var directoryRegExp = new RegExp("^" + "example/" + dirName);

    Ember.keys(requirejs._eak_seen).filter(function(key) {
        return directoryRegExp.test(key);
    }).forEach(function(moduleName) {
        var module = require(moduleName, null, null, true);
        if (!module) { throw new Error(moduleName + ' must export a single object to be registered with container.'); }
        var fileName =  moduleName.match(/[^\/]+\/?$/)[0];
        application.register(dirName + ":" + fileName, module['default']);
    });
};

export function initialize(container, application) {
    registerWithContainer("repos", application);
    Ember.inject.repos = function(name) {
        return container.lookup("repos:" + name);
    };
}

export default {
    name: "repos",
    initialize: initialize
};
