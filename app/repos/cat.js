import Ember from "ember";

var CatRepo = Ember.Object.extend({
    save: function() {
        return "cat saved";
    }
});

export default CatRepo;
