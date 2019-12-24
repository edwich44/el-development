var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
gulp.task('css', () => {
    return gulp.src('./src/css/*.css')
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(concat('main.min.css'))
      .pipe(gulp.dest('./dist/css/'));
  }); 


  var minify = require('gulp-uglify');
  gulp.task('js', function() {
    return gulp.src('./src/js/*.js')
      .pipe(minify())
      .pipe(concat('main.min.js'))
      .pipe(gulp.dest('./dist/js/'))
  });


  gulp.task('default', gulp.series('css', 'js'));