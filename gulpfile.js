var gulp = require('gulp');
var handlebars = require('gulp-handlebars');
var wrap = require('gulp-wrap');
var declare = require('gulp-declare');
var concat = require('gulp-concat');
//var browserify = require('gulp-browserify');
var sourcemaps = require('gulp-sourcemaps');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var gutil = require('gulp-util');
var minifyHTML = require('gulp-minify-html');
 
gulp.task('templates', function(){
  gulp.src('source/templates/*.hbs')
    .pipe(handlebars())
    .pipe(wrap('Handlebars.template(<%= contents %>)'))
    .pipe(declare({
      //namespace: 'MyApp.templates',
      noRedeclare: true, // Avoid duplicate declarations 
    }))
    .pipe(concat('compiledTemplates.js'))
    .pipe(gulp.dest('build/'));
});

gulp.task('scripts', function() {
    
    // set up the browserify instance on a task basis
  var b = browserify({
    entries: 'source/router/router.js',
    debug: true
  });

  return b.bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
        // Add transformation tasks to the pipeline here.
        .pipe(uglify())
        .on('error', gutil.log)
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('build/'));
});

gulp.task('index', function(){
  var opts = {
    conditionals: true,
    spare:true
  };
 
  return gulp.src('source/index.html')
    .pipe(minifyHTML(opts))
    .pipe(concat('index.html'))
    .pipe(gulp.dest('build/'));
});






// Default Task
gulp.task('default', ['templates', 'scripts', 'index']);