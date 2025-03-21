const gulp = require("gulp");

// Tasks
require("./gulp/dev.js");
require("./gulp/docs.js");

gulp.task(
  "default",
  gulp.series(
    "clean:dev",
    gulp.parallel(
      "html:dev",
      "css:dev",
      "images:dev",
      "fonts:dev",
      "files:dev",
      "js:dev"
    ),
    gulp.parallel("browsersync:dev", "watch:dev")
  )
);

gulp.task(
  "docs",
  gulp.series(
    "clean:docs",
    gulp.parallel(
      "html:docs",
      "css:docs",
      "images:docs",
      "fonts:docs",
      "files:docs",
      "js:docs"
    ),
    gulp.parallel("browsersync:docs")
  )
);
