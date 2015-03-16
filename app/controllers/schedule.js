import Ember from "ember";

var ScheduleController = Ember.Controller.extend({
    personRepo: Ember.inject.repos("person"),
    cat: Ember.inject.repos(),
    savePerson: function() {
        return this.get('personRepo').save();
    },
    saveCat: function() {
        return this.get("cat").save();
    }
});

export default ScheduleController;
