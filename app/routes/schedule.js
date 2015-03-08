import Ember from 'ember';

var ScheduleRoute = Ember.Route.extend({
    model: function(){
        return [1, 2, 3];
    },
    setupController: function(controller, model) {
        controller.set('shifts', model);
    }
});

export default ScheduleRoute;
