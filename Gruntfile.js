/*
 * grunt-contrib-yuidoc
 * http://gruntjs.com/
 *
 * Copyright (c) 2013 George Pantazis, contributors
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      test: ['tmp']
    },

    // Configuration to be run (and then tested).
    yuidoc: {
      compileA: {
        'name': 'Grunt Test',
        'description': 'Grunt Test Description',
        'version': '1.2.1',
        'url': 'http://test.com/',
        options: {
          paths: 'test/fixtures/app/',
          outdir: 'tmp/yuidoca/'
        }
      },

      compileB: {
        'name': 'Grunt Test',
        'description': 'Grunt Test Description',
        'version': '1.2.1',
        'url': 'http://test.com/',
        options: {
          paths: [
            'test/fixtures/app/',
            'test/fixtures/otherapp/'
          ],
          outdir: 'tmp/yuidocb/'
        }
      },

      compileParseOnly: {
        'name': "Grunt Test <%= 'Title' %>",
        'description': 'Description Text for <%= pkg.name %>',
        'version': '<%= pkg.version %>',
        'url': 'http://test.com/',
        options: {
          // NOTE: parseOnly
          parseOnly: true,
          paths: 'test/fixtures/app/',
          outdir: 'tmp/yuidocparseOnly/'
        }
      },

      compileC: {
        'name': "Grunt Test <%= 'Title' %>",
        'description': 'Description Text for <%= pkg.name %>',
        'version': '<%= pkg.version %>',
        'url': 'http://test.com/',
        options: {
          paths: 'test/fixtures/app/',
          outdir: 'tmp/yuidocc/'
        }
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-internal');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'yuidoc', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test', 'build-contrib']);
};
