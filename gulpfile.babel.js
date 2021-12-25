const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const templateCache = require('gulp-angular-templatecache');
const concat = require('gulp-concat');
const addStream = require('add-stream');
const less = require('gulp-less');
const uglify = require('gulp-uglify');
const uglifyStyle = require('gulp-uglifycss');
const clean = require('gulp-clean');
const rollup = require('gulp-rollup');
const rollupBabel = require("rollup-plugin-babel");
const browserSync = require('browser-sync').create();

// build
const cleanTask = () =>
  gulp.src('build/*', {
    read: false
  })
    .pipe(clean());

const lessTask = () =>
  gulp.src('src/cron-gen.less')
    .pipe(less())
    .pipe(uglifyStyle())
    .pipe(concat('cron-gen.min.css'))
    .pipe(gulp.dest('build'));

const srcTask = () =>
  gulp.src('src/**/*.js')
    .pipe(sourcemaps.init(undefined))
    .pipe(rollup({
      output: {
        format: 'iife'
      },
      plugins: [
        rollupBabel()
      ],
      input: 'src/cron-gen.module.js'
    }))
    .pipe(addStream.obj(() => gulp.src('src/templates/*.html')
      .pipe(templateCache({
        root: 'angular-cron-gen',
        module: 'angular-cron-gen'
      }))))
    .pipe(gulp.dest('build'))
    .pipe(concat('cron-gen.min.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write('.', undefined))
    .pipe(gulp.dest('build'));

const build = gulp.series(cleanTask, srcTask, lessTask);

// dev
const devTask = () => {
  browserSync.init({
    server: {
      baseDir: "./",
    },
    startPath: "/example/index.html",
    ui: false,
    port: 4000
  });
  gulp.watch("src/**/*", gulp.series(cleanTask, srcTask, lessTask));
  gulp.watch("example/*.html").on('change', browserSync.reload);
};

const dev = gulp.series(devTask);

export { dev, build };
