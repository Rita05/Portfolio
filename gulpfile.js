
//CODE USING GULP FOR SASS COMPILER 
const gulp =require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps=require('gulp-sourcemaps');
const watch = require('gulp-watch');

gulp.task('styles', function(){
      return gulp.src("src/sass/style.sass")
      .pipe(sourcemaps.init())
      .pipe(sass().on('error', sass.logError))  //compiler files into sass and make output style
      .pipe(sourcemaps.write("./"))
      .pipe(gulp.dest("static/css"))  //hold output files on the next address and style css
})

gulp.task('watch', function(){ 
    gulp.watch("src/sass/**/*.+(scss|sass)", gulp.series("styles")) //run the task by gulp.parallel
})

gulp.task('default', function(){
    gulp.task('default', gulp.parallel('watch','styles'))
})


