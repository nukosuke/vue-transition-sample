var gulp    = require('gulp');
var webpack = require('gulp-webpack');
var shell   = require('gulp-shell');

gulp.task('default', ['build', 'assets']);

gulp.task('build', function() {
  gulp.src(['src/js/main.js'])
  .pipe(webpack(require('./webpack.config')))
  .pipe(gulp.dest('build/js'));
});

gulp.task('assets', function() {
  gulp.src(['src/img/*'])
  .pipe(gulp.dest('build/img'));
});

gulp.task('run', ['default'], shell.task('npm start'));
