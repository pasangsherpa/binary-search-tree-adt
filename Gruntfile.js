'use strict';
module.exports = function (grunt) {
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		meta: {
			banner: '/*!\n' +
				'* <%= pkg.name %>\n' +
				'* v<%= pkg.version %> - ' +
				'<%= grunt.template.today("yyyy-mm-dd") %>\n' +
				'<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
				'* (c) <%= pkg.author %>\n' +
				'* <%= pkg.license %> License\n' +
				'*/\n'
		},
		concat: {
			options: {
				banner: '<%= meta.banner %>'
			},
			dist: {
				files: {
					'dist/<%= pkg.name %>.js': 'src/<%= pkg.name %>.js'
				}
			}
		},
		uglify: {
			options: {
				banner: '<%= meta.banner %>'
			},
			dist: {
				files: {
					'dist/<%= pkg.name %>.min.js': 'src/<%= pkg.name %>.js'
				}
			}
		},
		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},
			all: [
				'Gruntfile.js',
				'src/<%= pkg.name %>.js'
			]
		}
	});

	grunt.registerTask('default', ['jshint']);
	grunt.registerTask('release', [
		'jshint',
		'concat',
		'uglify'
	]);
};
