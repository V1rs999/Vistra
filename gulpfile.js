const gulp = require("gulp");
const cleanCSS = require("gulp-clean-css");
const minify = require("gulp-minify");
gulp.task("css", () => {
  return gulp.src("public/css/*.css")
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(gulp.dest("public/dist/"));
});

gulp.task("js", async () => {
  gulp.src(["public/js/*.js"])
    .pipe(minify())
    .pipe(gulp.dest("public/dist/"));
});