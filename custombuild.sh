#!/bin/sh
ng build custom-color-picker --prod --output-hashing=none && cat dist/custom-color-picker/runtime.js dist/custom-color-picker/polyfills.js dist/custom-color-picker/scripts.js dist/custom-color-picker/main.js > preview/custom-color-picker.js
