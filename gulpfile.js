const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const watch = require('gulp-watch');
const server = require('gulp-develop-server');

gulp.task('default', () => {
    console.log('running');
    return gulp.src([
            'src/steps.js',
            'src/engine.js',
            'src/app.js'
        ])
        .pipe(babel())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', () => {
    server.listen({path: './server.js'});
    gulp.watch('src/**', () => {
        gulp.start('default');
        server.restart();
    });
});
