const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const cleanCss = require('gulp-clean-css')
const sourcemaps = require('gulp-sourcemaps')

gulp.task('scss', () => gulp.src('web/assets/scss/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(cleanCss({ compatibility: 'ie9' }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('web/assets/dist'))
)

gulp.task('watch', cb => {
    gulp.watch([
        'web/assets/scss/**/*.scss',
        'web/assets/scss/*.scss'
    ], gulp.series('scss'))

    cb()
})

gulp.task('default', gulp.series('scss'))