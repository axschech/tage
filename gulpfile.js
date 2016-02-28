const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const watch = require('gulp-watch');
const server = require('gulp-develop-server');

gulp.task('default', () => {
    console.log('running');
    return gulp.src([
            'src/step.js',
            'src/steps.js',
            'src/render.js',
            'src/score.js',
            'src/engine.js',
            'src/app.js'
        ])
        .pipe(babel())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('server:restart', () => {
    server.restart();
})

gulp.task('watch', () => {
    server.listen({path: './server.js'});
    gulp.watch('src/**/*.js', ['default', 'server:restart']);
});
