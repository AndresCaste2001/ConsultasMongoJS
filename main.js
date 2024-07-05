import {connect} from './helpers/db/connect.js';
import { movis } from './js/modules/movis.js';

let mongo = new movis()
console.log(await mongo.getMoviesWithSecondaryArthur());