'use strict';

const getChannelURL = require('ember-source-channel-url');
const { embroiderSafe, embroiderOptimized } = require('@embroider/test-setup');

module.exports = async function () {
  return {
    usePnpm: true,
    scenarios: [
      {
        name: 'ember-lts-3.20',
        npm: {
          devDependencies: {
            '@ember/test-helpers': '^2.6.0',
            'ember-cli': '~3.20.0',
            'ember-modifier': '^3.0.0',
            'ember-qunit': '^5.1.5',
            'ember-resolver': '^8.0.3',
            'ember-source': '~3.20.6',
          },
        },
      },
      {
        name: 'ember-lts-3.24',
        npm: {
          devDependencies: {
            '@ember/test-helpers': '^2.6.0',
            'ember-cli': '~3.24.0',
            'ember-qunit': '^5.1.5',
            'ember-resolver': '^8.0.3',
            'ember-source': '~3.24.6',
          },
        },
      },
      {
        name: 'ember-lts-3.28',
        npm: {
          devDependencies: {
            '@ember/test-helpers': '^2.6.0',
            'ember-cli': '~3.28.0',
            'ember-qunit': '^5.1.5',
            'ember-resolver': '^8.0.3',
            'ember-source': '~3.28.9',
          },
        },
      },
      {
        name: 'ember-lts-4.4',
        npm: {
          devDependencies: {
            '@ember/test-helpers': '^2.6.0',
            'ember-qunit': '^5.1.5',
            'ember-resolver': '^8.0.3',
            'ember-source': '~4.4.0',
          },
        },
      },
      {
        name: 'ember-lts-4.8',
        npm: {
          devDependencies: {
            'ember-source': '~4.8.0',
          },
        },
      },
      {
        name: 'ember-lts-4.12',
        npm: {
          devDependencies: {
            'ember-source': '~4.12.0',
          },
        },
      },
      {
        name: 'ember-release',
        npm: {
          devDependencies: {
            'ember-source': await getChannelURL('release'),
            'ember-resolver': '^11.0.0',
          },
        },
      },
      {
        name: 'ember-beta',
        npm: {
          devDependencies: {
            'ember-source': await getChannelURL('beta'),
            'ember-resolver': '^11.0.0',
          },
        },
      },
      {
        name: 'ember-canary',
        npm: {
          devDependencies: {
            'ember-source': await getChannelURL('canary'),
            'ember-resolver': '^11.0.0',
          },
        },
      },
      {
        name: 'ember-classic',
        env: {
          EMBER_OPTIONAL_FEATURES: JSON.stringify({
            'application-template-wrapper': true,
            'default-async-observers': false,
            'template-only-glimmer-components': false,
          }),
        },
        npm: {
          devDependencies: {
            '@ember/test-helpers': '^2.6.0',
            'ember-cli': '~3.28.0',
            'ember-qunit': '^5.1.5',
            'ember-resolver': '^8.0.3',
            'ember-source': '~3.28.9',
          },
          ember: {
            edition: 'classic',
          },
        },
      },
      embroiderSafe(),
      embroiderOptimized(),
    ],
  };
};
