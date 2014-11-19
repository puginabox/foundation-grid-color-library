module.exports = function(grunt) {

        grunt.initConfig({

                uglify: {
                    my_target: {
                        files: {
                            'js/main.js': [
                                'js/lib/jquery/dist/jquery.min.js',
                                'js/lib/modernizr/modernizr.js',
                                'js/lib/angular/angular.min.js',
                                'js/lib/angular-route/angular-route.min.js',
                                'js/app.js',
                                'js/directives/*.js',
                                'js/controllers/*.js',
                                'js/services/*.js',
                                'js/modules/*.js'
                            ]
                        } //files
                    } //my_target
                },
                compass: {
                    dev: {
                        options: {
                            config: 'config.rb' // the Compass config file
                        } //options
                    } //dev
                }, //compass
                cssmin: {
                    combine: {
                        files: {
                            'css/master.min.css': 'css/master.css'
                        }
                    }
                },
                server: {
                    base: "" + (process.env.SERVER_BASE || 'www'),
                    web: {
                        port: 8000
                    }
                },
                //====================================================== WATCHING ==========================|
                watch: {
                    options: {
                        livereload: true
                    },
                    scripts: {
                        files: ['js/*js', 'js/controllers/*.js'],
                        tasks: ['uglify', 'copy:js']
                    },
                    sass: {
                        files: ['dev/sass/*.scss'],
                        tasks: ['compass:dev', 'copy:css']
                    }
                } //watch
            }) //initConfig

        //====================================================== LOADING TASKS ==========================|
        grunt.loadNpmTasks('grunt-contrib-uglify');
        grunt.loadNpmTasks('grunt-contrib-watch');
        grunt.loadNpmTasks('grunt-contrib-compass');
        grunt.loadNpmTasks('grunt-contrib-cssmin');
        grunt.loadNpmTasks('express');

        grunt.loadTasks("tasks");

        //---------------------------------------- initial task (watch) when grunt starts ------------------|     
        grunt.registerTask('default', ['server', 'watch']);
    } //exports
