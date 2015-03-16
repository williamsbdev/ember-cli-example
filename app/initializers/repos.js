import Ember from "ember";
import registerWithContainer from "ember-cli-auto-register/register";

export function initialize(container, application) {
    registerWithContainer("repos", application);
    Ember.inject.repos = function(name) {
        var value = function(name) {
            return container.lookup("repos:" + name);
        };
        return name ? value(name) : value.property();
    };
}

export default {
    name: "repos",
    initialize: initialize
};
