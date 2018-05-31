module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('pkg.json'),
    clean: ["<%= pkg.src %>/dist/*.*","<%= pkg.src %>/tmp/*.*"],
    concat: {
      js: {
        options: {
          separator: ';'
        },
        src: [
          '<%= pkg.src %>/core/**/*.controller.js',
          '<%= pkg.src %>/core/**/*.service.js',
          '<%= pkg.src %>/components/**/*.controller.js',
          '<%= pkg.src %>/components/**/*.service.js',
          '<%= pkg.src %>/shared/**/*.controller.js',
          '<%= pkg.src %>/shared/**/*.service.js',
          '<%= pkg.src %>/tmp/templates.js'
        ],
        dest: '<%= pkg.src %>/tmp/<%= pkg.name %>.js'
      },
      css:{
        options: {
          separator: '\n'
        },
        src:[
          '<%= pkg.src %>/assets/css/*.css',
          '<%= pkg.src %>/core/**/*.css',
          '<%= pkg.src %>/components/**/*.css',
          '<%= pkg.src %>/shared/**/*.css'
        ],
        dest: '<%= pkg.src %>/tmp/<%= pkg.name %>.css'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %><%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'dist/<%= pkg.name %>-<%= pkg.version %>.min.js': ['<%= concat.dist.dest %>']
      }
      }
    },
    filehash:{
      options:{
        algorithm: 'md5',
        hashlen: 10
      },
      dist:{
        cwd:'<%= pkg.src %>/tmp',
        src:['<%= pkg.name %>.js','<%= pkg.name %>.css'],
        dest:'<%= pkg.src %>/dist'
      }
    },
    ngAnnotate: {
      dist: {
        files: {
          '<%= concat.js.dest %>': ['<%= concat.js.dest %>']
        }
      }
    },
    jshint: {
      files: ['Gruntfile.js', '<%= pkg.src %>/js/**/*.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        },
        force:true
      }
    },
    html2js: {
      options:{
        base:'<%= pkg.src %>'
      },
      dist: {
        src: ['<%= pkg.src %>/core/**/*.html' , '<%= pkg.src %>/shared/**/*.html',
              '<%= pkg.src %>/components/**/*.html'],
        dest: '<%= pkg.src %>/tmp/templates.js'
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    },
    injector:{
      options: {
        relative:true,
        addRootSlash:false
      },
      local_dependencies: {
        files: {
          '<%= pkg.src %>/index.html': ['<%= pkg.src %>/dist/<%= pkg.name %>.*.js','<%= pkg.src %>/dist/<%= pkg.name %>.*.css'],
        }
      }
    },
    copy:{
      main: {
        files:[{
          src:'<%= pkg.src %>/index_dev.html',
          dest:'<%= pkg.src %>/index.html'
        }
        ]
      }
    }
  });
  grunt.file.expand('../node_modules/grunt-*/tasks').forEach(grunt.loadTasks);
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-ng-annotate');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-html2js');
  grunt.loadNpmTasks('grunt-file-hash');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-injector');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.registerTask('test', ['jshint']);
  grunt.registerTask('default', ['clean','jshint','html2js', 'concat', 'ngAnnotate','filehash','copy','injector']);

};
