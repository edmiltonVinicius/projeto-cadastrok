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

const compilerSassLogin = () => {
    return gulp.src('src/static/src/css/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('style.min.css'))
        .pipe(uglifycss({
            "uglyComments": true,
            "maxLineLen": 80
        }))
        .pipe(gulp.dest('src/static/build/css/'))
}
const compilerSassDashboard = () => {
    return gulp.src('src/static/src/css/dashboard/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('dashboard.min.css'))
        .pipe(uglifycss({
            "uglyComments": true,
            "maxLineLen": 80
        }))
        .pipe(gulp.dest('src/static/build/css/'))
}

const minifyJsLogin = () => {
    return gulp.src('src/static/src/js/js-login/*.js')
        .pipe(babel({
            presets: ['@babel/preset-env']
        }))
        .pipe(concat('index.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('src/static/build/js/'))
}
const minifyJsDashboard = () => {
    return gulp.src('src/static/src/js/js-dashboard/*.js')
        .pipe(babel({
            presets: ['@babel/preset-env']
        }))
        .pipe(concat('dashboard.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('src/static/build/js/'))
}

const server = () => {
    gulp.watch( ['src/static/src/js/js-login/*.js',
                 'src/static/src/js/js-dashboard/*.js', 
                 'src/static/src/css/login/*.scss',
                 'src/static/src/css/dashboard/*.scss'],
    gulp.series(minifyJsLogin, minifyJsDashboard, compilerSassLogin, compilerSassDashboard))
}

exports.default = gulp.parallel(minifyImage, compilerSassLogin, compilerSassDashboard, minifyJsLogin, minifyJsDashboard,
    gulp.series(server))
    