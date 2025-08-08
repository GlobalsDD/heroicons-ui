const fs = require('fs');
const path = require('path');

const svgDir = path.join(__dirname, '..', 'svg');
const outputFile = path.join(__dirname, '..', 'icons.js');

const files = fs.readdirSync(svgDir).filter((f) => f.endsWith('.svg'));

const lines = [];
lines.push('export const icons = [');
for (const file of files) {
  const name = path.basename(file, '.svg');
  lines.push(`  { name: '${name}', Icon: require('./svg/${file}').default },`);
}
lines.push('];');

fs.writeFileSync(outputFile, lines.join('\n'));
