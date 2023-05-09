#!/usr/bin/env node

import readlineSync from 'readline-sync';
import {
    getName,
    name
} from './src/cli.js';


console.log('Welcome to the Brain Games!');
//Получение имени 
getName();
