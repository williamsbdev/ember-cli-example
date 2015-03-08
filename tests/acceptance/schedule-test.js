import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';

var application;

const SHIFTS = '.shifts';

module('Acceptance: Schedule', {
    beforeEach: function() {
        application = startApp();
    },
    afterEach: function() {
        Ember.run(application, 'destroy');
    }
});

test('will show schedule of employees working today', function(assert) {
    visit('/schedule');
    andThen(function() {
        assert.equal(currentURL(), '/schedule');
        assert.equal(find(SHIFTS).length, 3);
    });
});
