// Import stylesheets
import './style.css';

import { ListController } from './classes/list.controller.js';
import restService from './classes/rest.service.js';

// App initialization
new ListController(restService);
