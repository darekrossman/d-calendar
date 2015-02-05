var gulp = require('gulp'),
    browserSync = require('browser-sync')

gulp.task('browser-sync', function() {
  browserSync({
    server: {baseDir: './'},
    open: false,
    files: ['*.js', '*.html', '*.css']
  });
}); 

gulp.task('default', ['browser-sync'])
