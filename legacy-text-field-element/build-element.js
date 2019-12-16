const concat = require('concat');
const fs = require('fs-extra');

(async function build() {
  // Instead of /CustomElements/ put your project name - just check a dist folder to see how its formatted and make it that way
  const files = [
    './dist/legacy-text-field-element/runtime.js',
    './dist/legacy-text-field-element/polyfills.js',
    './dist/legacy-text-field-element/main.js'
  ];

  await fs.ensureDir('dist/elements');
  await concat(files, 'dist/elements/ne-legacy-text-field-element.js');
  // await fs.copyFile(
  //   './dist/legacy-text-field-element/styles.css',
  //   'dist/elements/ne-form-elements-styles.css'
  // );
})();
