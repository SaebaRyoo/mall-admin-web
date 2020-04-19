import "@babel/polyfill"
import sum from './utils/sum';

import _ from 'lodash'
sum(1, 2);

console.log(_.join(['a', 'b', 'c'], '***'))