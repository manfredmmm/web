var gulp         = require('gulp'),
    plumber      = require('gulp-plumber'),
    jade         = require('gulp-jade'),
    connect      = require('gulp-connect'),
    stylus       = require('gulp-stylus'),
    concat       = require('gulp-concat'),
    uglify       = require('gulp-uglify'),
    clean        = require('gulp-clean'),
    rename       = require('gulp-rename'),
    gulpIf       = require('gulp-if'),
    jeet         = require('jeet'),
    autoprefixer = require('autoprefixer-stylus'),
    STYL_FILES   = ['src/styles/**/*.styl'],
    JS_FILES     = ['src/js/**/*.js'],
    JADE_FILES   = ['src/views/**/*.jade'],
    PUBLIC_FILES = ['public/**/*'],
    ENV          = process.env.NODE_ENV || 'development';

gulp.task('clean', function () {
    gulp.src(['public/*.html',
              'public/css', 
              'public/js', 
              'public/*.html', 
              'public/CNAME', 
              'public/videos', 
              'public/pdfs', 
              'public/images'
        ])
        .pipe(plumber())
        .pipe(clean())
});

gulp.task('public', function () {
    gulp.src(['src/images/**/*'])
        .pipe(gulp.dest('public/images'));
    gulp.src(['src/pdfs/**/*'])
        .pipe(gulp.dest('public/pdfs'));
    gulp.src(['src/videos/**/*'])
        .pipe(gulp.dest('public/videos'));
    gulp.src(['src/fonts/**/*'])
        .pipe(gulp.dest('public/fonts'));
    gulp.src(['src/CNAME'])
        .pipe(gulp.dest('public/CNAME'));
});

gulp.task('views', function () {
    gulp.src(JADE_FILES)
        .pipe(plumber())
        .pipe(jade({
            pretty: ENV === 'development' 
        }))
        .pipe(gulp.dest('public'));
});

gulp.task('urlFallback', function () {
    gulp.src('public/index.html')
        .pipe(plumber())
        .pipe(rename('200.html'))
        .pipe(gulp.dest('public'))
});

gulp.task('styles', function () {
    gulp.src([
            'node_modules/font-awesome/css/font-awesome.css',
            'src/styles/application.styl'
        ])
        .pipe(plumber())
        .pipe(stylus({
            compress: ENV === 'production',
            use: [
                  jeet(),
                  autoprefixer()
                ]
        }))
        .pipe(concat('application.css'))
        .pipe(gulp.dest('public/css'));
});

gulp.task('js', function () {
    return gulp.src([
        'node_modules/jquery/dist/jquery.js',
        'bower_components/sly/dist/sly.js',
        'node_modules/vivus/dist/vivus.js',
        'node_modules/angular/angular.js',
        'src/js/mmm/**/*.js',
        'src/js/application.js'
    ])
    .pipe(plumber())
    .pipe(concat('application.js'))
    .pipe(gulpIf(ENV === 'production', uglify()))
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

gulp.task('build', ['views', 'styles', 'js', 'public']);
gulp.task('default', ['build', 'watch', 'connect']);
