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

  grunt.registerMultiTask('create-conf', 'creates config file', function() {

      // Handle options.
     var src = '{\n'+
		  '\t"current":{\n'+
			'\t\t"host": "qa.credifi.com",\n'+
			'\t\t"port": "8083"\n'+
		  '\t},\n'+
		  '\t"qa":{\n'+
			'\t\t"host": "qa.credifi.com",\n'+
			'\t\t"port": "8083"\n'+
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
      grunt.file.write('config.json', src);

      // Print a success message.
      grunt.log.writeln('File "'  +'config.json' + '" created.');
  
  }); 

};