﻿var gulp = require('gulp');
var runSequence = require('run-sequence');
var changed = require('gulp-changed');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var paths = require('../paths');
var assign = Object.assign /*|| require('object.assign')*/;
//var notify = require("gulp-notify");
var typescript = require('gulp-typescript');
var tsc = require('typescript');
//var glob = require('glob');
//var fs = require('fs');
//var del = require('del');

var tsProject = typescript.createProject('./tsconfig.json', { typescript: tsc });

// transpiles changed es6 files to SystemJS format
// the plumber() call prevents 'pipe breaking' caused
// by errors from other gulp plugins
// https://www.npmjs.com/package/gulp-plumber
gulp.task('build-system', function () {
    return gulp.src(paths.dtsSrc.concat(paths.source))
      .pipe(plumber())
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(tsProject())
      .pipe(sourcemaps.write({ includeContent: true }))
      .pipe(gulp.dest(paths.output));
});

// copies changed json files from the config directory
gulp.task('build-json', function () {
    return gulp.src(paths.json)
      .pipe(changed(paths.output, { extension: '.json' }))
      .pipe(gulp.dest(paths.output));
});


// copies changed html files to the output directory
gulp.task('build-html', function () {
    return gulp.src(paths.html)
      .pipe(changed(paths.output, { extension: '.html' }))
      .pipe(gulp.dest(paths.output));
});

// copies changed css files to the output directory
//gulp.task('build-css', ['css'], function () {
//    return gulp.src([paths.css, paths.fonts, paths.images], { base: '.' })
//      .pipe(changed(paths.output, { extension: '.css' }))
//      .pipe(gulp.dest(paths.output));
//});


// this task calls the clean task (located
// in ./clean.js), then runs the build-system
// and build-html tasks in parallel
// https://www.npmjs.com/package/gulp-run-sequence
gulp.task('build', function (callback) {
    return runSequence(
      //'lint',
      'clean',
      ['build-json', 'build-html'/*, 'build-css'*/],
      'build-system',
      callback
    );
});