const fs = require('fs')
const path = require('path')

const data = fs.readFileSync(path.resolve(__dirname, '../dist/bundle.js'), 'utf-8')
const withoutMain = data.replace('exports.main = main;', '')
const withoutBalances = withoutMain.replace('exports.calculateBalances = calculateBalances;', '')

fs.writeFileSync(path.resolve(__dirname, '../dist/bundle.js'), withoutBalances, 'utf-8')
