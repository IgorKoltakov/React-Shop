const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const bulk = require("gulp-sass-bulk-importer");
const prefixer = require("gulp-autoprefixer");
const clean = require("gulp-clean-css");
const concat = require("gulp-concat");
const map = require("gulp-sourcemaps");
const bs = require("browser-sync");

exports.default = () =>
  gulp
    .src("src/*.scss")
    .pipe(map.init())
    .pipe(bulk())
    .pipe(sass())
    .pipe(
      prefixer({
        overrideBrowserslist: ["last 8 versions"],
        browsers: [
          "Android >= 4",
          "Chrome >= 20",
          "Firefox >= 24",
          "Explorer >= 11",
          "iOS >= 6",
          "Opera >= 12",
          "Safari >= 6",
        ],
      })
    )
    .pipe(
      clean({
        level: 2,
      })
    )
    .pipe(concat("style.min.css"))
    .pipe(map.write("../sourcemaps/"))
    .pipe(gulp.dest("src/style/css/"))
    .pipe(bs.stream());
