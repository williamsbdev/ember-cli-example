import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';
import lookup from "ember-cli-test-helpers/tests/helpers/lookup";

var application;

module('Acceptance: Schedule', {
    beforeEach: function() {
        application = startApp();
    },
    afterEach: function() {
        Ember.run(application, 'destroy');
    }
});

test('test injection of plain Ember.Object', function(assert) {
    var controller = lookup("controller:schedule");
    assert.equal(controller.save(), "saved");
});
