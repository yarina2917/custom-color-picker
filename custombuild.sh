#!/bin/sh
ng build custom-color-picker --prod --output-hashing=none && cat dist/custom-color-picker/main-es5.js dist/custom-color-picker/polyfill-webcomp.js dist/custom-color-picker/polyfills-es5.js dist/custom-color-picker/runtime-es5.js dist/custom-color-picker/scripts.js> preview/custom-color-picker.js
