let gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    minify = require('gulp-minify'),
    notify = require('gulp-notify'),
    concat = require('gulp-concat'),
    livereload = require('gulp-livereload');


    gulp.task('html' , function(){
        return gulp.src('./stage/html/*.html')
        .pipe(gulp.dest('./dist'))
        .pipe(notify('HTML Task Done !!'))
        .pipe(livereload());
    });

    gulp.task('css' , function(){
        return gulp.src(['./stage/css/**/*.scss', './stage/css/**/*.css'])
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error' , sass.logError))
        .pipe(autoprefixer())
        .pipe(concat('main.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist/css'))
        .pipe(notify('CSS Task Done !!'))
        .pipe(livereload());
    });

    gulp.task('js' , function(){
        return gulp.src('./stage/js/*.js')
        .pipe(concat('main.js'))
        .pipe(minify())
        .pipe(gulp.dest('./dist/js'))
        .pipe(notify('JS Task Done !!'))
        .pipe(livereload());
    });

    gulp.task('watch' , function(){
        require('./server');
        livereload.listen();
        gulp.watch('./stage/html/*.html' , gulp.series('html'));
        gulp.watch(['./stage/css/**/*.css' , './stage/css/**/*.scss'] , gulp.series('css'));
        gulp.watch('./stage/js/*.js' , gulp.series('js'));
    });