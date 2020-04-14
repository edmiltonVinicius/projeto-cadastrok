const gulp = require('gulp')
const imagemin = require('gulp-imagemin')
const sass = require('gulp-sass')
const concat = require('gulp-concat')
const uglifycss = require('gulp-uglifycss')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')


const minifyImage = () => {
    return gulp.src('src/static/src/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('src/static/build/img'))
}

const compilerSass = () => {
    return gulp.src('src/static/src/css/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('style.min.css'))
        .pipe(uglifycss({
            "uglyComments": true,
            "maxLineLen": 80
        }))
        .pipe(gulp.dest('src/static/build/css/'))
}

const minifyJs = () => {
    return gulp.src('src/static/src/js/*.js')
        .pipe(babel({
            presets: ['@babel/preset-env']
        }))
        .pipe(concat('index.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('src/biuld/js/'))
}

const watchJs = () => {
    gulp.watch('src/static/src/js/*.js', minifyJs)
}

const watchSass = () => {
    gulp.watch('src/static/src/css/*.scss', compilerSass)
}


exports.default = gulp.parallel(minifyImage, compilerSass, minifyJs,
    gulp.series(watchSass, watchJs))