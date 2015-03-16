import Ember from "ember";
import registerWithContainer from "ember-cli-auto-register/register";

export function initialize(container, application) {
    registerWithContainer("repos", application);
    Ember.inject.repos = function(name) {
        return function(propertyName) {
            var objectName = name || propertyName;
            return container.lookup("repos:" + objectName);
        }.property();
    };
}

export default {
    name: "repos",
    initialize: initialize
};
