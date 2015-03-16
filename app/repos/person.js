import Ember from "ember";

var PersonRepo = Ember.Object.extend({
    save: function() {
        return "person saved";
    }
});

export default PersonRepo;
