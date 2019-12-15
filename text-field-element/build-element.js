const concat = require('concat');
const fs = require('fs-extra');

(async function build() {
  // Instead of /CustomElements/ put your project name - just check a dist folder to see how its formatted and make it that way
  const files = [
    './dist/text-field-element/runtime-es2015.js',
    './dist/text-field-element/polyfills-es2015.js',
    './dist/text-field-element/main-es2015.js'
  ];

  await fs.ensureDir('dist/elements');
  await concat(files, 'dist/elements/ne-text-field-element.js');
  await fs.copyFile(
    './dist/text-field-element/styles.css',
    'dist/elements/ne-text-field-element-styles.css'
  );
})();
