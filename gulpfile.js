var gulp         = require('gulp'),
    plumber      = require('gulp-plumber'),
    jade         = require('gulp-jade'),
    connect      = require('gulp-connect'),
    stylus       = require('gulp-stylus'),
    jeet         = require('jeet'),
    STYL_FILES   = ['assets/styles/*.styl']
    JS_FILES     = ['assets/js/*.js'],
    JADE_FILES   = ['src/views/*.jade'],
    PUBLIC_FILES = ['public/**/*'];


gulp.task('views', function () {
    gulp.src(JADE_FILES)
        .pipe(plumber())
        .pipe(jade())
        .pipe(gulp.dest('public'));
});

gulp.task('styles', function () {
    gulp.src('assets/styles/application.styl')
        .pipe(plumber())
        .pipe(stylus({
        use: [jeet()]
        }))
        .pipe(gulp.dest('public/css'));
});

gulp.task('js', function () {
    gulp.src('assets/js/application.js')
        .pipe(plumber())
        .pipe(gulp.dest('public/js'));
});

gulp.task('watch', function () {
    gulp.watch(JADE_FILES, ['views']);
    gulp.watch(PUBLIC_FILES, ['reload']);
    gulp.watch(STYL_FILES, ['styles']);
    gulp.watch(JS_FILES, ['js']);
});

gulp.task('connect', function () {
    connect.server({
        root: 'public',
        livereload: true
    });
});

gulp.task('reload', function () {
    gulp.src(PUBLIC_FILES)
        .pipe(connect.reload());
});

gulp.task('build', ['views', 'styles', 'js']);
gulp.task('default', ['build', 'watch', 'connect']);
