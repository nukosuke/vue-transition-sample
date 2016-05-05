var gulp    = require('gulp');
var webpack = require('gulp-webpack');
var shell   = require('gulp-shell');

gulp.task('default', ['build']);

gulp.task('build', function() {
  gulp.src(['src/js/main.js'])
  .pipe(webpack(require('./webpack.config')))
  .pipe(gulp.dest('build'));
});

gulp.task('run', ['build'], shell.task('npm start'));