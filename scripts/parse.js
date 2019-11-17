const fs = require('fs')
const path = require('path')

const data = fs.readFileSync(path.resolve(__dirname, '../dist/bundle.js'), 'utf-8');
const exportsDeclaration = "exports.main = main";
const newValue = data.replace(new RegExp(exportsDeclaration), '');
fs.writeFileSync(path.resolve(__dirname, '../dist/bundle.js'), newValue, 'utf-8');
