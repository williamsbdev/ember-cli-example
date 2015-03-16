import Ember from "ember";

var ScheduleController = Ember.Controller.extend({
    personRepo: Ember.inject.repos("person"),
    cat: Ember.inject.repos(),
    "pet-bird": Ember.inject.repos(),
    savePerson: function() {
        return this.get('personRepo').save();
    },
    saveCat: function() {
        return this.get("cat").save();
    },
    askBirdToSpeak: function() {
        return this.get("pet-bird").chirp();
    }
});

export default ScheduleController;
