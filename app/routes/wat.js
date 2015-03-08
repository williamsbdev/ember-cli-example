import Ember from "ember";
import Person from "example/models/person";

var ApplicationRoute = Ember.Route.extend({
    model: function() {
        return Person.create();
    }
});

export default ApplicationRoute;
