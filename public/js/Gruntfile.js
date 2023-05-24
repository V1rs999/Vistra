module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    cssmin: {
      css: {
        src: "/css/style.css",
        dest: "dist/css/style.min.css"
      }
    }
  });
};