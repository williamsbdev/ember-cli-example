import Ember from "ember";

var ScheduleController = Ember.Controller.extend({
    personRepo: Ember.inject.repos("person"),
    save: function() {
        return this.get('personRepo').save();
    }
});

export default ScheduleController;
