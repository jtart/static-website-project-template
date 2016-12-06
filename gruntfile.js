module.exports = function (grunt) {
    grunt.initConfig({
        watch: {
            css: {
                files: ['src/assets/sass/*.scss'],
                tasks: ['sass:dev']
            }
        },
        sass: {
            dev: {
                options: {
                    sourcemap: 'none',
                    style: 'expanded',
                    noCache: true
                },
                files: [{
                    expand: true,
                    cwd: 'src/assets/sass/',
                    src: ['**/*.scss'],
                    dest: 'src/assets/styles/',
                    ext: '.css'
                }]
            },
            dist: {
                options: {
                    sourcemap: 'none',
                    style: 'compressed',
                    noCache: true
                },
                files: [{
                    expand: true,
                    cwd: 'src/assets/sass/',
                    src: ['**/*.scss'],
                    dest: 'src/assets/styles/',
                    ext: '.css'
                }]
            }
        },
        uncss: {
            dist: {
                files: [
                    { src: 'src/index.html', dest: 'src/assets/styles/main.css' }
                ]
            }
        },
        cssmin: {
            dist: {
                files: [
                    { src: 'src/assets/styles/main.css', dest: 'dist/assets/styles/main.css' }
                ]
            }
        },
        imagemin: {
            dist: {
                options: {
                    optimizationLevel: 3
                },
                files: [{
                    expand: true,
                    cwd: 'src/assets/images',
                    src: ['**/*.{png,jpg,jpeg,gif}'],
                    dest: 'dist/assets/images'
              }]
           }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: '**/*.html',
                    dest: 'dist/'
              }]
           }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-uncss');

    grunt.registerTask('dev', ['sass:dev', 'watch']);
    grunt.registerTask('dist', ['sass:dist', 'uncss:dist', 'cssmin:dist', 'imagemin:dist', 'htmlmin:dist']);
    grunt.registerTask('default', ['dist']);
};