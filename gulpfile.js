var gulp = require('gulp'),
	less = require('gulp-less'),
	path = require('path'),
	plumber = require('gulp-plumber'),
	postcss = require('gulp-postcss'),
	cssnano = require('cssnano'),
	LessAutoprefix = require('less-plugin-autoprefix'),
	autoprefix = new LessAutoprefix({ browsers: ['last 2 versions'] })
;


// Less Task
// Converts Less to CSS and adds autoprefixes
gulp.task('less', function(){
	var plugins = [
		cssnano()
	];
	gulp.src('css/*.less')
	.pipe(plumber())
	.pipe(less({
		plugins: [autoprefix]
	}))
	.pipe(postcss(plugins))
	.pipe(gulp.dest('css/'));
});

// Watch Task
// Watches Less
gulp.task('watch', function(){
	gulp.watch('css/*.less', ['less']);
});

gulp.task('default', ['less', 'watch']);