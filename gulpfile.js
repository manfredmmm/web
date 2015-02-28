var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    jade = require('gulp-jade'),
    connect = require('gulp-connect'),
    less = require('gulp-less'),
    lessFiles = ['assets/styles/*.less']
    jadeFiles = ['src/views/*.jade'],
    publicFiles = ['public/**/*'];

gulp.task('views', function () {
    gulp.src(jadeFiles)
        .pipe(plumber())
        .pipe(jade())
        .pipe(gulp.dest('public'));
});

gulp.task('styles', function () {
    gulp.src('assets/styles/application.less')
        .pipe(plumber())
        .pipe(less())
        .pipe(gulp.dest('public/css'));
});

gulp.task('watch', function () {
    gulp.watch(jadeFiles, ['views']);
    gulp.watch(publicFiles, ['reload']);
    gulp.watch(lessFiles, ['styles']);
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
