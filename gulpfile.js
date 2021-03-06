var gulp = require('gulp');
var browserSync = require('browser-sync'); 

// Styles
var uglify = require('gulp-uglify'); 
var concat = require('gulp-concat'); 
var minify = require('gulp-clean-css'); 
var autoprefixer = require('gulp-autoprefixer'); 
var sass = require('gulp-sass'); 
var sourcemaps = require('gulp-sourcemaps');

// Image Compression
var imagemin = require('gulp-imagemin'); 
var imageminPngquant = require('imagemin-pngquant'); 
var imageminJpgRecompress = require('imagemin-jpeg-recompress'); 

// Paths
var CSS_PATH = 'css'; 
var JS_PATH = 'js'; 
var SCSS_PATH = 'scss/**/*.scss'; 
var IMAGES_UNCOMPRESSED_PATH = 'images/uncompressed/**/*.{png,jpeg,jpg,svg,gif}'; 
var IMAGES_COMPRESSED_PATH = 'images/compressed'; 
var FONTS_PATH = 'fonts'; 


// === TASKS ===

// SCSS
gulp.task('styles', function() {
    return gulp.src('scss/styles.scss')
        .pipe(autoprefixer())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest(CSS_PATH))
        .pipe(browserSync.stream());         
});

// Move Fonts Folder to fonts
gulp.task('fonts', function(){
    return gulp.src('node_modules/font-awesome/fonts/*')
      .pipe(gulp.dest(FONTS_PATH));
});

// Move JS Files to src/js
gulp.task('js', function(){
    return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js','node_modules/jquery/dist/jquery.min.js','node_modules/popper.js/dist/umd/popper.min.js'])
      .pipe(gulp.dest(JS_PATH))
      .pipe(browserSync.stream());
  });
  

// Watch File Changes
gulp.task('watch', function() {
    browserSync.init({
        server: './'
    }); 

    gulp.watch(SCSS_PATH, ['styles']); 
    gulp.watch('*.html').on('change', browserSync.reload); 
});

gulp.task('default', ['styles', 'js', 'watch']); 