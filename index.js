#!/usr/bin/env node
import { count } from "./utils.js";
const {count} = require('.utils.js')

import fs from 'node:fs' //explicit saying fs is from internal node, not 3rd party installed package
import _ from 'lodash' // 3rd party installed package

const note = process.argv[2]; // first arg node environment, second this file

const newNote = {
    content: note,
    id: Date.now()
}

console.log(newNote) // note "this is my new note"
