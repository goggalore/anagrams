const gulp = require('gulp');
const rollup = require('rollup-stream');
const source = require('vinyl-source-stream');

gulp.task('rollup', () => {
    return rollup({
        input: 'src/ts-out/main.js',
        format: 'iife',
    })
    .pipe(source('main.js'))
    .pipe(gulp.dest('./build'))
});

gulp.task('default', gulp.series('rollup'), () => {
    gulp.watch(['./src/ts-out/main.js']);
});