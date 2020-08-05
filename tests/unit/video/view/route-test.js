import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | video/view', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:video/view');
    assert.ok(route);
  });
});
