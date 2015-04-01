var gulp        = require('gulp'),
    plumber     = require('gulp-plumber'),
    jade        = require('gulp-jade'),
    connect     = require('gulp-connect'),
    stylus      = require('gulp-stylus'),
    jeet        = require('jeet'),
    stylFiles   = ['assets/styles/*.styl']
    jadeFiles   = ['src/views/*.jade'],
    publicFiles = ['public/**/*'];


gulp.task('views', function () {
    gulp.src(jadeFiles)
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

gulp.task('watch', function () {
    gulp.watch(jadeFiles, ['views']);
    gulp.watch(publicFiles, ['reload']);
    gulp.watch(stylFiles, ['styles']);
});

gulp.task('connect', function () {
    connect.server({
        root: 'public',
        livereload: true
    });
});

gulp.task('reload', function () {
    gulp.src(publicFiles)
        .pipe(connect.reload());
});

gulp.task('build', ['views', 'styles']);
gulp.task('default', ['build', 'watch', 'connect']);
