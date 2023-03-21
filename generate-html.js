export const name = 'generate-html'
//import { name } from '...'

const fs = require('fs');
const handlebars = require('handlebars');

const templateFile = 'index.html';
const contentFile = 'content.json';
const outputFile = 'output.html';

// Load the template file
const template = fs.readFileSync(templateFile, 'utf8');

// Load the content file
const content = JSON.parse(fs.readFileSync(contentFile, 'utf8'));

// Compile the template
const compiledTemplate = handlebars.compile(template);

// Render the template with the content
const html = compiledTemplate(content);

// Write the result to a file
fs.writeFileSync(outputFile, html);
