//
// Filename: gulpfile.js
// Version: 0.1
//

////////////////////
// Modules
////////////////////
var gulp        = require('gulp'),
    gutil       = require('gulp-util'),
    concat      = require('gulp-concat'),
    coffee      = require('gulp-coffee'),
    minifycss   = require('gulp-minify-css'),
    less        = require('gulp-less'),
    rename      = require('gulp-rename'),
    banner      = require('gulp-header'),
    concat      = require('gulp-concat'),
    uglify      = require('gulp-uglify'),
    live        = require('gulp-livereload'),
    pkg         = require('./package.json');

////////////////////
// Directory
////////////////////
var assets = {
    'public':       'public/assets/',
    'lib':          'app/assets/',
    'fonts':        'app/assets/fonts/',
    'vendor':       'app/assets/vendor/',
    'coffee':       'app/assets/coffeescript/',
    'vanilla':      'app/assets/vanilla/',
    'compiled':     'app/storage/assets/',
    'img':          'app/assets/images/',
    'css':          'app/assets/css/',
    'bootstrap': {
        'fontAwesome':  'app/assets/bootstrap/font-awesome/',
        'twitterBs':    'app/assets/bootstrap/bootstrap/'
    }
};

var _bootstrap = {
    'banner': ['/*!',
    ' * ' + pkg.name + ' v' + pkg.version + ' (' + pkg.homepage + ')',
    ' * Copyright (c) MobileCosystem',
    ' */',
    ''].join('\n'),
    'jQuery': 'if (typeof jQuery === \'undefined\') { throw new Error(\'Bootstrap\\\'s JavaScript requires jQuery\') }\n\n'
};


//////////////////////////////////////////////////
// Bootstrap (http://getbootstrap.com)
// https://github.com/twbs/bootstrap
//////////////////////////////////////////////////

// SAMPLE
// gulp.task('bootstrap:js', function()
// {
//     return gulp.src([
//         assets.bootstrap.twitterBs + 'js/transition.js',
//         assets.bootstrap.twitterBs + 'js/alert.js',
//         assets.bootstrap.twitterBs + 'js/button.js',
//         assets.bootstrap.twitterBs + 'js/carousel.js',
//         assets.bootstrap.twitterBs + 'js/collapse.js',
//         assets.bootstrap.twitterBs + 'js/dropdown.js',
//         assets.bootstrap.twitterBs + 'js/modal.js',
//         assets.bootstrap.twitterBs + 'js/tooltip.js', // Tooltip.js must be first before PopOver.js
//         assets.bootstrap.twitterBs + 'js/popover.js',
//         assets.bootstrap.twitterBs + 'js/scrollspy.js',
//         assets.bootstrap.twitterBs + 'js/tab.js',
//         assets.bootstrap.twitterBs + 'js/affix.js' ])
//     .pipe( concat('bootstrap.js') )
//     .pipe( banner(_bootstrap.jQuery) )
//     .pipe( gulp.dest(assets.compiled) );
// });