const concat = require('concat');
const fs = require('fs-extra');

(async function build() {
  // Instead of /CustomElements/ put your project name - just check a dist folder to see how its formatted and make it that way
  const files = [
    './dist/form-element/runtime-es2015.js',
    './dist/form-element/polyfills-es2015.js',
    './dist/form-element/main-es2015.js'
  ];

  await fs.ensureDir('dist/elements');
  await concat(files, 'dist/elements/ne-form-element.js');
  await fs.copyFile(
    './dist/form-element/styles.css',
    'dist/elements/ne-form-elements-styles.css'
  );
})();
