/*
 * app.js - Express server with basic auth
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
  http    = require( 'http'     ),
  express = require( 'express'  ),
  routes  = require( './routes' ),

  app     = express(),
  server  = http.createServer( app );
// ------------- END MODULE SCOPE VARIABLES ---------------

// ------------- BEGIN SERVER CONFIGURATION ---------------
app.configure( function () {
  app.use( express.bodyParser() ); //body-parser
  app.use( express.methodOverride() ); //this needs changed to method-override
  app.use( express.basicAuth( 'user', 'spa' ) );
  app.use( express.static( __dirname + '/public' ) ); //serve-static
  app.use( app.router );
});

app.configure( 'development', function () {
  app.use( express.logger() ); //morgan
  app.use( express.errorHandler({ //errorhandler
    dumpExceptions : true,
    showStack      : true
  }) );
});

app.configure( 'production', function () {
  app.use( express.errorHandler() ); //errorhandler
});

routes.configRoutes( app, server );
// -------------- END SERVER CONFIGURATION ----------------

// ----------------- BEGIN START SERVER -------------------
server.listen( 3000 );
console.log(
  'Express server listening on port %d in %s mode',
   server.address().port, app.settings.env
);
// ------------------ END START SERVER --------------------
