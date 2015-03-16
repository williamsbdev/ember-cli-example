import Ember from "ember";

var PetBird = Ember.Object.extend({
    chirp: function() {
        return "chirped";
    }
});

export default PetBird;
