const gulp = require('gulp');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');

// Copy all HTML files
gulp.task('copyHtml', function(done) {
    gulp.src('src/**/*.html')
        .pipe(gulp.dest('dist'));
    done();
});

// Compile all SCSS files
gulp.task('compileScss', function() {
    return gulp.src('src/styles/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('src/styles/'))
        .pipe(gulp.src('src/styles/**/*.css'))
        .pipe(gulp.dest('dist/styles'));
});

gulp.task('watchScss', function () {
    gulp.watch('src/styles/**/*.scss', gulp.series('compileScss'));
});

gulp.task('default', gulp.series('copyHtml', 'compileScss', 'watchScss'));
