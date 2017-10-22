const gulp = require('gulp'),
	  	postcss	= require('gulp-postcss'),
	  	variables = require('postcss-simple-vars'),
	  	hexrgba = require('postcss-hexrgba'),
	  	nested = require('postcss-nested'),
	  	cssImport = require('postcss-import'),
	  	autoprefixer = require('autoprefixer'),
	  	mixins = require('postcss-mixins');



	gulp.task('styles', () => {
		return gulp.src('./app/assets/styles/main.css')
					 .pipe(postcss([cssImport, mixins, variables, nested, hexrgba, autoprefixer]))	
					 .on('error', function(errorInfo) {
					 		console.log(errorInfo.toString());
					 		this.emit('end');
					 })
					 .pipe(gulp.dest('./app/temp/assets/styles'));
	})