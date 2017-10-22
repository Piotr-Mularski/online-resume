const gulp = require('gulp'),
			imagemin = require('gulp-imagemin'),
			del = require('del'),
			usemin = require('gulp-usemin'),
			rev = require('gulp-rev'),
			cssnano = require('gulp-cssnano'),
			uglify = require('gulp-uglify'),
			browserSync = require('browser-sync').create();

gulp.task('previewDist', function() {
	browserSync.init({
		server: {
			baseDir: 'docs'
		}
	});
});

gulp.task('deleteDistFolder', function() {
	return del("./docs")
});			

gulp.task('optimizeImages', ['deleteDistFolder'], function() {
	return gulp.src(['./app/assets/images/**/*', '!./app/assets/images/source/*'])
		.pipe(imagemin({
			progressive: true,
			interlaced: true
		}))
		.pipe(gulp.dest('./docs/assets/images'));
})

gulp.task('useminTrigger', ['deleteDistFolder'], function() {
		gulp.start('usemin');
});

gulp.task('copyGeneralFiles', ['deleteDistFolder'], function() {
	const pathsToCopy = [
		'./app/**/*',
		'!.app/index.html',
		'!./app/assets/images/**',
		'!./app/assets/scripts/**',
		'!./app/assets/styles/**',
		'!./app/temp',
		'./app/temp/**'
	]

	return gulp.src(pathsToCopy)
		.pipe(gulp.dest('./docs'));
});

gulp.task('usemin', ['styles', 'scripts'], function() {
	return gulp.src('./app/index.html')
		.pipe(usemin({
			css: [() => {return rev()}, () => {return cssnano()}],
			js: [() => {return rev()}, () => {return uglify()}]
		}))
		.pipe(gulp.dest('./docs'));
});

gulp.task('build', ['deleteDistFolder', 'copyGeneralFiles', 'optimizeImages', 'useminTrigger']);