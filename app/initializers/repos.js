import Ember from "ember";
import PersonRepo from "example/repos/person";

export function initialize(container, application) {
    application.register("repos:person", PersonRepo);
    Ember.inject.repos = function(name) {
        return container.lookup("repos:" + name);
    };
}

export default {
    name: "repos",
    initialize: initialize
};
