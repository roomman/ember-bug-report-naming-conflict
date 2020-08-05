import Application from 'ember-bug-report-naming-conflict/app';
import config from 'ember-bug-report-naming-conflict/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
