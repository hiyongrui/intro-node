#!/usr/bin/env node
import { count } from "./utils.js";
import whateverdefault from ".utils.js"

const note = process.argv[2]; // first arg node environment, second this file

const newNote = {
    content: note,
    id: Date.now()
}

console.log(newNote) // note "this is my new note"
