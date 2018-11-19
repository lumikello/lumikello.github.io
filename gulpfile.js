var gulp = require("gulp"),
    sass = require("gulp-sass"),
    autoprefixer = require("gulp-autoprefixer");

gulp.task("scss", function (done) {
    gulp.src("src/scss/**/*.scss")
        .pipe(sass({
            outputStyle: "compressed"
        }))
        .pipe(autoprefixer({
            browsers: ["last 20 versions"]
        }))
        .pipe(gulp.dest("themes/lumikello/static/css"));
    done();
});

gulp.task("materializejs", function (done) {
    gulp.src("node_modules/materialize-css/dist/js/materialize.min.js")
        .pipe(gulp.dest("themes/lumikello/static/js"));
    done();
});

gulp.task("jquery", function (done) {
    gulp.src("node_modules/jquery/dist/jquery.min.js")
        .pipe(gulp.dest("themes/lumikello/static/js"));
    done();
});

// Watch asset folder for changes
gulp.task("watch", function () {
    gulp.watch("./src/scss/**/*", { ignoreInitial: false }, gulp.series('scss'));
    gulp.watch("node_modules/materialize-css/dist/js/**/*", { ignoreInitial: false }, gulp.series('materializejs'));
    gulp.watch("node_modules/jquery/dist/js/**/*", { ignoreInitial: false }, gulp.series('jquery'));
});
