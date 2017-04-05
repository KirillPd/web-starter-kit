/**
 * Lint Scss
 */
'use strict';

const gulp      = require('gulp'),
      stylelint = require('gulp-stylelint'),
      notify    = require('gulp-notify');

module.exports = function(options) {

  return (cb) => {
    gulp.src(`./${options.src}/scss/**/*`)
      .pipe(stylelint({
        reporters: [{
          formatter: 'string',
          console: true
        }]
      }))
      .on('error', notify.onError({
        title: 'SCSS'
      }));

    cb();
  };

};