import Ember from "ember";

var PersonRepo = Ember.Object.extend({
    save: function() {
        return "saved";
    }
});

export default PersonRepo;
