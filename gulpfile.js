var gulp = require('gulp');
var connect = require('gulp-connect');
var browserify = require('browserify');
var babelify = require("babelify");
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var open = require('gulp-open');


gulp.task('connect', function() {
  connect.server({
    root: 'dist',
    livereload: true,
    port: 3000
  });
});

gulp.task('watch', function () {
  gulp.watch(['dist/**/*.*'], ['html']);
});

gulp.task('html', function () {
  gulp.src('dist/*.html')
    .pipe(connect.reload());
});





gulp.task('browserify', function(){
  browserify('src/js/main.js')
  .transform("babelify", {presets: ["es2015", "react"]})
  .transform('reactify')
  .bundle()
  .pipe(source('main.js'))
  .pipe(gulp.dest('dist/js'));
});

gulp.task('copy', function() {
  gulp.src('src/index.html')
  .pipe(gulp.dest('dist'));
  gulp.src('src/css/*.*')
  .pipe(gulp.dest('dist/css/'));
  gulp.src('src/js/vendors/*.*')
  .pipe(gulp.dest('dist/js'));
});

gulp.task('app', function(){
  var options = {
    uri: 'http://localhost:3070'
    };
  gulp.src(__filename)
  .pipe(open(options));
});

gulp.task('default',['connect', 'app', 'browserify','copy','watch'],function() {
  return gulp.watch('src/**/*.*',['browserify', 'copy']);
});
