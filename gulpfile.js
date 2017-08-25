// include the required packages.
var gulp = require('gulp')
var standard = require('gulp-standard')

gulp.task('standard', function () {
  return gulp.src(['src/**/**/*.js'])
    .pipe(standard())
    .pipe(standard.reporter('default', {
      breakOnWarning:true,
    }))
})
