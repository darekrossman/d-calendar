var gulp = require('gulp'),
    browserSync = require('browser-sync')

gulp.task('browser-sync', function() {
  browserSync({
    server: {baseDir: './'}
  });
});

gulp.task('default', ['browser-sync'], function(){
  gulp.watch(['*.js', '*.html', '*.css'])
})
