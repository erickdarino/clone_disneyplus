const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function styles ( ) {
    return gulp.src('./src/styles/*.scss') /* função que recupera os arquivos*/
        .pipe(sass({outputStyle: 'compressed'})) /*estilo de saida do css será comprimido*/
        .pipe(gulp.dest('./dist/css')); /*cria pasta que recebera o css*/
}

exports.default = styles;
exports.watch = function(){
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
}