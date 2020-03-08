const fs = require('fs')
const path = require('path')

const data = fs.readFileSync(path.resolve(__dirname, '../dist/bundle.js'), 'utf-8')
const exportsDeclarations = ['exports.main = main;', 'exports.calculateBalances = calculateBalances;']
exportsDeclarations.forEach(exportDeclaration => {
  const newValue = data.replace(new RegExp(exportDeclaration), '')
  fs.writeFileSync(path.resolve(__dirname, '../dist/bundle.js'), newValue, 'utf-8')
})
