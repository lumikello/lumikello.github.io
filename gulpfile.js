var gulp = require("gulp"),
    sass = require("gulp-sass"),
    autoprefixer = require("gulp-autoprefixer");

gulp.task("scss", function () {
    gulp.src("src/scss/**/*.scss")
        .pipe(sass({
            outputStyle: "compressed"
        }))
        .pipe(autoprefixer({
            browsers: ["last 20 versions"]
        }))
        .pipe(gulp.dest("themes/lumikello/static/css"));
});

gulp.task("materialize-js", function () {
    gulp.src("node_modules/materialize-css/dist/js/materialize.min.js")
        .pipe(gulp.dest("themes/lumikello/static/js"));
});

// Watch asset folder for changes
gulp.task("watch", ["scss"], function () {
    gulp.watch("src/scss/**/*", ["scss"]);
	gulp.watch("node_modules/materialize-css/dist/js/**/*", ["materialize-js"]);
});
