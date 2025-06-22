const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin')

function styles ( ) {
    return gulp.src('./src/styles/*.scss') /* função que recupera os arquivos*/
        .pipe(sass({outputStyle: 'compressed'})) /*estilo de saida do css será comprimido*/
        .pipe(gulp.dest('./dist/css')); /*cria pasta que recebera o css*/
}


function images( ) {
    return gulp.src('./src/images/**/*') /* função que recupera os arquivos*/
        .pipe(imagemin()) 
        .pipe(gulp.dest('./dist/images')); /*cria pasta que recebera oas imagens*/
}

exports.default = gulp.parallel(styles, images)
exports.watch = function(){
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
}