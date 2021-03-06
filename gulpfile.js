/**
*
*	GULP
*
*
*
*	DESCRIPTION:
*		- 
*
*
*	API:
*		- 
*
*
*	NOTES:
*		[1] 
*
*
*	TODO:
*		[1] 
*
*
*	HISTORY:
*		- 2014/04/21: Created. [AReines].
*
*
*	DEPENDENCIES:
*		[1] 
*
*
*	LICENSE:
*		
*
*	Copyright (c) 2014. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. athan@nodeprime.com. 2014.
*
*
*/


// MODULES //

var // Task runner:
	gulp = require( 'gulp' );


// PLUG-INS //

var jshint = require( 'gulp-jshint' ),
	stripDebug = require( 'gulp-strip-debug' ),
	uglify = require( 'gulp-uglify' ),
	concat = require( 'gulp-concat' ),
	rename = require( 'gulp-rename' ),
	minifyHTML = require( 'gulp-minify-html' ),
	minifyCSS = require( 'gulp-minify-css' ),
	autoprefix = require( 'gulp-autoprefixer' ),
	minifyJSON = require( 'gulp-jsonminify' );


// TASKS //

// JSHint:
gulp.task( 'jshint', function() {
	gulp.src(
		[
			'./src/*.js',
			'./src/*/*.js'
		])
		.pipe( jshint() )
		.pipe( jshint.reporter( 'default' ) );
});

// Concatenate scripts:
gulp.task( 'library.build', function() {
	gulp.src( [ './src/start.js', './src/*/*.js', './src/xfig.js', './src/end.js' ] )
		.pipe( concat( 'xfig.js' ) )
		.pipe( gulp.dest( './build/' ) )
		.pipe( rename( 'index.js' ) )
		.pipe( gulp.dest( './lib/' ) )
		.pipe( rename( 'xfig.min.js' ) )
		.pipe( stripDebug() )
		.pipe( uglify() )
		.pipe( gulp.dest( './build/' ) );
});

// Default:
gulp.task( 'default', [ 'library.build' ], function(){});