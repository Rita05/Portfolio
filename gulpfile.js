// const gulp = require('gulp');
// const browserSync = require('browser-sync');
// const sass = require('gulp-sass')(require('sass'));
// //const chalk=require('chalk')

// // Static server
// gulp.task('server', function() {
//     browserSync.init({
//         server: {
//             baseDir: "src"
//         }
//     });
// });


// gulp.task('styles', function(){
//     return gulp.src("src/sass/*.+(scss|sass)")  //take files 
//            //.pipe(sass())      //compiler files into sass
//            .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError)) //compiler files into sass and make output style
//            .pipe(gulp.dest("src/css"))  //hold output files on the next address and style css
//            .pipe(browserSync.stream());  //resave files after renewal and update the browser-page 
// })
 
// //task looks after(controlls) the changes like compiler of the files 
// gulp.task('watch', function(){
//      gulp.watch("src/sass/*.+(scss|sass)", gulp.parallel("styles")) //run the task by gulp.parallel
//      gulp.watch("src/*.html").on("change", browserSync.reload);  //task update browser
     
// })

// //task run by default
// gulp.task('default', gulp.parallel('watch', 'server', 'styles'))



//NEW CODE USING GULP FOR SASS COMPILER 
const gulp =require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps=require('gulp-sourcemaps');
const watch = require('gulp-watch');

gulp.task('styles', function(){
      // return gulp.src("src/sass/**/*.+(scss|sass)")  //take files 
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
//добавить в package.json зависимости и запустить сборщик  
// "browser-sync": "^2.27.7",
// "gulp-autoprefixer": "^8.0.0",
// "gulp-clean-css": "^4.3.0",

