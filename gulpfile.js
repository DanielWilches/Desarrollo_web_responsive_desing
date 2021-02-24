// require  la version de de import en node
// dependencias
const gulp =  require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer');



// tareas
gulp.task('sass', () => {
    return gulp.src('./scss/**/*.scss').pipe(sass({
        // seleciona el tipo de salida que va tener el archivo css
        // outputStyle: 'expanded',
        outputStyle: "compressed",
        // comenta la ubicacion de la liena del codigo en el archivo original antes de ser compilados
        //sourceComments: true
    })).pipe(autoprefixer({
        versions: ['last 2 browsers']
    })).pipe(gulp.dest('./css'));
});

gulp.task('watch',  ()=>{ 
    return gulp.watch('./scss/**/*.scss', gulp.series('sass'));
});


