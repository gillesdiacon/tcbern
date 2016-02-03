/* jshint node:true, jquery:false */
'use strict';

var gulp = require('gulp');
var $$ = require('gulp-load-plugins')({lazy: true});
var eventStream = require('event-stream');
var del = require('del');
var path = require('path');
var runSequence = require('run-sequence');
var useref = require('gulp-useref');
var gulpif = require('gulp-if');
var inject = require('gulp-inject');
var uglify = require('gulp-uglify');
var cssnano = require('gulp-cssnano');
var concat = require('gulp-concat');
var ngHtml2Js = require("gulp-ng-html2js");

gulp.task('clean', function () {
    del(['dist/**', 'temp/**']);
});

gulp.task('analyze', function () {
    var basePath = path.resolve('./app/js/');
    $$.util.log('Analyzing sources in ' + basePath);

    return gulp.src([basePath + '/**/*.js', '!./Content/bower_components/**/*'])
        .pipe($$.jshint())
        .pipe($$.jshint.reporter('jshint-stylish', { verbose: true }))
        .pipe($$.jshint.reporter('fail'));
});

gulp.task('release', ['clean'], function() {
    gulp.src('app/images/*.png')
        .pipe(gulp.dest('dist/images'));
    
    var partials = gulp.src(['app/**/*.html', '!app/index.html', '!app/bower_components/**/*.html'])
        .pipe($$.htmlhint({'doctype-first': false}))
        .pipe($$.htmlhint.reporter())
        .pipe($$.htmlmin({ removeComments: true }))
        .pipe(ngHtml2Js({
            moduleName: 'tcbernApp'
        }))
        .pipe($$.concat({path: 'template.js', cwd: ''}))
        .pipe($$.rev())
        .pipe(gulp.dest('dist'));
    
    var main = gulp.src('app/*.html')
        .pipe($$.useref())
        //.pipe(gulpif('*.js', $$.uglify()))
        .pipe(gulpif('*.js', $$.rev()))
        .pipe(gulpif('*.css', $$.cssnano()))
        .pipe(gulpif('*.css', $$.rev()))
        .pipe($$.revReplace())
        .pipe(inject(partials, { ignorePath: ['dist/'], addRootSlash: false, starttag: '<!-- inject:template-js -->' }))
        .pipe(gulpif('*.html', $$.htmlmin({ removeComments: true })));
    
    return eventStream.merge(partials, main)
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
