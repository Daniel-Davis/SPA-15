/*
 * app.js - Express server static files
*/

/*jslint         node    : true, continue : true,
  devel  : true, indent  : 2,    maxerr   : 50,
  newcap : true, nomen   : true, plusplus : true,
  regexp : true, sloppy  : true, vars     : false,
  white  : true
*/
/*global */

// ------------ BEGIN MODULE SCOPE VARIABLES --------------
'use strict';
var
  http    = require( 'http'    ),
  express = require( 'express' ),
  morgan = require( 'morgan' ),
  bodyParser = require( 'body-parser' ),
  methodOverride = require( 'method-override' ),
  errorHandler = require( 'errorhandler' ),

  app     = express(),
  server  = http.createServer( app );
// ------------- END MODULE SCOPE VARIABLES ---------------

// ------------- BEGIN SERVER CONFIGURATION ---------------
  app.use( bodyParser.urlencoded() );
  app.use( methodOverride() );
  app.use( express.static( __dirname + '/public' ) );

  app.use( morgan( 'common' ) );
  app.use( errorHandler() );
  //  app.use( errorHandler({
  //  dumpExceptions : true,
  //    showStack      : true
  // });

app.get( '/', function ( request, response ) {
  response.redirect( '/spa.html' );
});
// -------------- END SERVER CONFIGURATION ----------------

// ----------------- BEGIN START SERVER -------------------
server.listen( 3000 );
console.log(
  'Express server listening on port %d in %s mode',
   server.address().port, app.settings.env
);
// ------------------ END START SERVER --------------------
