'use strict';

define('ember-quickstart/tests/app.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - app.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint.\n');
  });
});
define('ember-quickstart/tests/components/people-list.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - components/people-list.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/people-list.js should pass ESLint.\n');
  });
});
define('ember-quickstart/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('ember-quickstart/tests/helpers/destroy-app.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - helpers/destroy-app.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint.\n');
  });
});
define('ember-quickstart/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'ember-quickstart/tests/helpers/start-app', 'ember-quickstart/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _emberQuickstartTestsHelpersStartApp, _emberQuickstartTestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _emberQuickstartTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _emberQuickstartTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('ember-quickstart/tests/helpers/module-for-acceptance.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - helpers/module-for-acceptance.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint.\n');
  });
});
define('ember-quickstart/tests/helpers/resolver', ['exports', 'ember-quickstart/resolver', 'ember-quickstart/config/environment'], function (exports, _emberQuickstartResolver, _emberQuickstartConfigEnvironment) {

  var resolver = _emberQuickstartResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _emberQuickstartConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _emberQuickstartConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('ember-quickstart/tests/helpers/resolver.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - helpers/resolver.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint.\n');
  });
});
define('ember-quickstart/tests/helpers/start-app', ['exports', 'ember', 'ember-quickstart/app', 'ember-quickstart/config/environment'], function (exports, _ember, _emberQuickstartApp, _emberQuickstartConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var attributes = _ember['default'].merge({}, _emberQuickstartConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    return _ember['default'].run(function () {
      var application = _emberQuickstartApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('ember-quickstart/tests/helpers/start-app.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - helpers/start-app.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint.\n');
  });
});
define('ember-quickstart/tests/integration/components/people-list-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('people-list', 'Integration | Component | people list', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'KVMFQL0j',
      'block': '{"statements":[["append",["unknown",["people-list"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'JpDJYv4j',
      'block': '{"statements":[["text","\\n"],["block",["people-list"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('ember-quickstart/tests/integration/components/people-list-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - integration/components/people-list-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/people-list-test.js should pass ESLint.\n');
  });
});
define('ember-quickstart/tests/resolver.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - resolver.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint.\n');
  });
});
define('ember-quickstart/tests/router.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - router.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint.\n');
  });
});
define('ember-quickstart/tests/routes/scientists.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - routes/scientists.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/scientists.js should pass ESLint.\n');
  });
});
define('ember-quickstart/tests/routes/wrestlers.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - routes/wrestlers.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/wrestlers.js should pass ESLint.\n');
  });
});
define('ember-quickstart/tests/test-helper', ['exports', 'ember-quickstart/tests/helpers/resolver', 'ember-qunit'], function (exports, _emberQuickstartTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_emberQuickstartTestsHelpersResolver['default']);
});
define('ember-quickstart/tests/test-helper.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - test-helper.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint.\n');
  });
});
define('ember-quickstart/tests/unit/routes/scientists-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:scientists', 'Unit | Route | scientists', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-quickstart/tests/unit/routes/scientists-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/routes/scientists-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/scientists-test.js should pass ESLint.\n');
  });
});
define('ember-quickstart/tests/unit/routes/wrestlers-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:wrestlers', 'Unit | Route | wrestlers', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-quickstart/tests/unit/routes/wrestlers-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/routes/wrestlers-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/wrestlers-test.js should pass ESLint.\n');
  });
});
require('ember-quickstart/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
