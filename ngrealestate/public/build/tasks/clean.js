﻿var gulp = require('gulp');
var paths = require('../paths');
var del = require('del');
//var vinylPaths = require('vinyl-paths');

// deletes all files in the output path
gulp.task('clean', function () {
    return del([paths.output + "**/*", paths.buildOutput + "**/*"]);
});