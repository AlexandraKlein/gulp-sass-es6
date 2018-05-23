'use strict';

import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import htmlMin from 'gulp-htmlmin';
import pngquant from 'imagemin-pngquant';
import replace from 'gulp-replace';
import runSeq from 'run-sequence';

gulp.task('build', (done) => {
    runSeq('clean', ['build_sass', 'build_img', 'build_fonts', 'build_js'], 'build_html', done);
});

// build SASS for distribution
gulp.task('build_sass', ['sass_dist']);

// build JS for distribution
gulp.task('build_js', ['scripts_dist', 'lint_js']);

// build HTML for distribution
gulp.task('build_html', () => {
    gulp.src(global.paths.html)
        .pipe(replace('css/style.css', 'css/style.min.css'))
        .pipe(replace('js/script.js', 'js/script.min.js'))
        .pipe(htmlMin({ collapseWhitespace: true }))
        .pipe(gulp.dest(global.paths.dist));
});

// build img for distribution
gulp.task('build_img', () => {
    gulp.src(global.paths.img)
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{ removeViewBox: false }],
            use: [pngquant()]
        }))
        .pipe(gulp.dest(`${global.paths.dist}/img`));
});

// build fonts for distribution
gulp.task('build_fonts', () => {
    gulp.src(global.paths.fonts)
      .pipe(gulp.dest(`${global.paths.dist}/fonts`));
});
