var gulp         = require('gulp'),
    plumber      = require('gulp-plumber'),
    jade         = require('gulp-jade'),
    connect      = require('gulp-connect'),
    stylus       = require('gulp-stylus'),
    concat       = require('gulp-concat'),
    uglify       = require('gulp-uglify'),
    jeet         = require('jeet'),
    autoprefixer = require('autoprefixer-stylus'),
    STYL_FILES   = ['assets/styles/**/*.styl'],
    JS_FILES     = ['assets/js/**/*.js'],
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
            //compress: true,
            use: [
                  jeet(),
                  autoprefixer()
                ]
        }))
        .pipe(gulp.dest('public/css'));
});

gulp.task('js', function () {
    return gulp.src([
        'node_modules/jquery/dist/jquery.js',
        'bower_components/sly/dist/sly.js',
        'node_modules/vivus/dist/vivus.js',
        'node_modules/angular/angular.js',
        'assets/js/mmm/**/*.js',
        'assets/js/application.js'
    ])
    .pipe(plumber())
    .pipe(concat('application.js'))
    //.pipe(uglify())
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
        livereload: true,
        fallback: "public/index.html"
    });
});

gulp.task('reload', function () {
    gulp.src(PUBLIC_FILES)
        .pipe(connect.reload());
});

gulp.task('build', ['views', 'styles', 'js']);
gulp.task('default', ['build', 'watch', 'connect']);
