/*
 * createconfig
 * https://github.com/shootermv/create-config
 *
 * Copyright (c) 2015 mvilner
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('create-config', 'creates config file', function() {
    // Merge task-specific and/or target-specific options with these defaults.
   /* var options = this.options({
      punctuation: '.',
      separator: ', '
    });*/
     console.log('this.options - ',this.options().dest);
    // Iterate over all specified file groups.
 
      // Concat specified files.
      var src ;

      // Handle options.
      src += '{\n'+
		  '\t"current":{\n'+
			'\t\t"host": "localhost",\n'+
			'\t\t"port": "8000"\n'+
		  '\t},\n'+
		  '\t"qa":{\n'+
			'\t\t"host": "somehost",\n'+
			'\t\t"port": "someport"\n'+
		  '\t},\n'+
		  '\t"local":{\n'+
			'\t\t"host": "localhost",\n'+
			'\t\t"port": "80"\n'+
		  '\t},\n'+
		  '\t"mocks":{\n'+
			'\t\t"host": "localhost",\n'+
			'\t\t"port": "8000"\n'+
		  '\t}\n'+
		'}';

      // Write the destination file.
      grunt.file.write(this.options().dest, src);

      // Print a success message.
      grunt.log.writeln('File "' + this.options().dest + '" created.');
  
  });

};
