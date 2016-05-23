var gulp   = require('gulp');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var sass = require("gulp-sass");
var watch = require('gulp-watch');
var connect = require('gulp-connect');


gulp.task('default', ['sass', 'connect', 'watch']);

gulp.task('date', function(){
  var today = new Date();
  var day = today.getDate();
  var month = today.getMonth()+1;
  var year = today.getFullYear();
  console.log("Yay, today is " + month + '/' + day + '/' + year);
});

gulp.task('jshint', function() {
  return gulp.src('./js/*.js')
  .pipe(jshint())
  .pipe(jshint.reporter(stylish));
});

gulp.task('sass', function(){
  return gulp.src('./css/**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./css/'))
  .pipe(connect.reload());
});

gulp.task('watch', function(){
  gulp.watch('./css/**/*.scss', ['sass']);
});

gulp.task('connect', function(){
  connect.server({
    livereload: true
  });
});
