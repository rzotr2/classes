// Import stylesheets
import './style.css';

import { ListController } from './classes/list.controller.js';
import restService from './classes/rest.service.js';
import generalUtilsService from './util-classes/general-utils.service.js';

// App initialization
new ListController(restService, generalUtilsService);
