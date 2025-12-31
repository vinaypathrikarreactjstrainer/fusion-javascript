console.log('javascript - main');

import {name as aliasName, getName} from './variables.js';
import {getUserName} from './functions.js';
import { eventGetName, shweta } from './buttons.js';

console.log('name => ', aliasName);
// getUserName();
console.log('shweta => ', shweta);
shweta.getCity();
shweta.displayUserName();