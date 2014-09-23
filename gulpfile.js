// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins
var browserSync = require('browser-sync');
var gutil = require('gulp-util');
var compass = require('gulp-compass');

//compass
gulp.task('compass', function() {
  var stream = gulp.src('sass/**/*.sass')
    .pipe(
      compass({
        config_file: 'config.rb',
        css: 'dist/css',
        sass: 'sass'
      })
      .on('error', function(error){
        gutil.log(error);     
        stream.end();
      })
    )
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.reload({stream:true}));
  return stream
});

//browserSync
gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "./"
        },
        port: 3001
    });
});

// Reload all Browsers
gulp.task('bs-reload', function () {
    browserSync.reload();
});


// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('sass/**/*.sass', ['compass']);
    gulp.watch('*.html', ['bs-reload']);
    gulp.watch('javascripts/*.js', ['bs-reload']);
});

// Default Task
gulp.task('default', ['compass', 'browser-sync','watch']);

