// Grab dependencies
const gulp = require("gulp");
const browserSync = require('browser-sync').create();
const pug = require('gulp-pug');
const stylus = require('gulp-stylus');
const autoprefixer = require('gulp-autoprefixer');
const image = require('gulp-image');
// Make Tasks
/*
    Main Task: make local server
*/
gulp.task('makeServe', ['stylus', 'html'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("stylus/**/*.styl", ['stylus']);
    gulp.watch("pug/**/*.pug", ['html']);
    gulp.watch("app/*.js").on('change', browserSync.reload);
});
/* 
    Compile Pug Files & Build Markup
*/
gulp.task('html', function buildHTML() {
    return gulp.src('pug/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('./'))
        .pipe(browserSync.stream());
});

/*
    Compile Stylus Into Regular CSS
*/ 
gulp.task('stylus', function() {
    return gulp.src('stylus/*.styl')
        .pipe(stylus({
            compress: true
        }))
        .pipe(autoprefixer({
            browsers: ['last 5 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream());
});

/*
    Compress Images Without Loosing it's Quality
*/ 
gulp.task('image', function() {
    gulp.src('./images/*.jpeg')
      .pipe(image())
      .pipe(gulp.dest('./images'));
  });

  gulp.task('default', ['makeServe']);