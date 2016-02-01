/* jshint node:true, jquery:false */
'use strict';

var gulp = require('gulp');
var $$ = require('gulp-load-plugins')({lazy: true});
var del = require('del');
var path = require('path');
var runSequence = require('run-sequence');
var useref = require('gulp-useref');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');
var uglify = require('gulp-uglify');
var cssnano = require('gulp-cssnano');

gulp.task('clean', function () {
    del(['dist/*']);
});

gulp.task('analyze', function () {
    var basePath = path.resolve('./app/js/');
    $$.util.log('Analyzing sources in ' + basePath);

    return gulp.src([basePath + '/**/*.js', '!./Content/bower_components/**/*'])
        .pipe($$.jshint())
        .pipe($$.jshint.reporter('jshint-stylish', {verbose: true}))
        .pipe($$.jshint.reporter('fail'));
});

gulp.task('release', ['clean'], function(){
    return gulp.src('./app/*.html')
        .pipe(useref())
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', cssnano()))
        .pipe(gulpif('*.js', $$.rev()))
        .pipe(gulpif('*.css', $$.rev()))
        .pipe($$.revReplace())
        .pipe(gulpif('*.html', $$.htmlmin({removeComments: true})))
        .pipe($$.debug({title: 'Processed output File: '}))
        .pipe(gulp.dest('dist'));
});

//gulp.task('default', ['analyze', 'release']); // Dependencies are run in parallel, so an error in analyze does not stop the build
gulp.task('default', function(){
    runSequence('analyze', 'release');
});

gulp.task('watch', function () {
    gulp.watch(['./src/index.html', './src/app/**/*.js'], ['default']);
});
