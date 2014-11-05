module.exports = function(grunt) {
// Import des packages
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    // Configure a mochaTest task
    mochaTest: {
      test: {
        options: {
          reporter: 'spec',
          captureFile: 'results.txt', // Optionally capture the reporter output to a file
          quiet: false, // Optionally suppress output to standard out (defaults to false)
          clearRequireCache: false // Optionally clear the require cache before running tests (defaults to false)
        },
        src: ['test/**/*.js']
      }
    }

    sass: {                              // Nom de la tâche
      dist: {                            // Nom de la sous-tâche
        options: {                       // Options
          style: 'expanded'
        },
        files: {                         // Liste des fichiers
          'main.css': 'main.scss',       // 'destination': 'source'
          'widgets.css': 'widgets.scss'
        }
      }
    }

    watch: {
      scripts: {
        files: ['**/*.js'],
        tasks: ['jshint'],
        options: {
          spawn: false,
        },
      },
    },


  });

  grunt.registerTask('default', ['mochaTest', 'sass:dist', 'watch']);
};