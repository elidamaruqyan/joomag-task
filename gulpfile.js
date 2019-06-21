var gulp = require("gulp"),
    sass = require("gulp-sass"),
    postcss = require("gulp-postcss"),
    autoprefixer = require("autoprefixer"),
    cssnano = require("cssnano"),
    sourcemaps = require("gulp-sourcemaps"),
    browserSync = require("browser-sync").create();

// Put this after including our dependencies
var paths = {
    styles: {
        src: "app/scss/**/*.scss",
        dest: "app/css"
    }

    // Easily add additional paths
    , html: {
        src: 'app/**/*.html',
        dest: 'app'
    }
};

function style() {
    return (
        gulp
            .src(paths.styles.src)
            .pipe(sourcemaps.init())
            .pipe(sass())
            .on("error", sass.logError)
            .pipe(postcss([autoprefixer(), cssnano()]))
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(paths.styles.dest))
            .pipe(browserSync.stream())
    );
}

// Add browsersync initialization at the start of the watch task
function watch() {
    browserSync.init({
        server: {
            baseDir: "app"
        }
    });
    gulp.watch("app/scss/**/*.scss", style);
    gulp.watch("app/**/*.html", reload);
}

function reload() {
    browserSync.reload();
}

exports.watch = watch;
exports.style = style;