/*
 * app.js - Express server with generic routing
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

// all configurations below are for routes
app.get( '/', function ( request, response ) {
  response.redirect( '/spa.html' );
});

app.all( '/:obj_type/*?', function ( request, response, next ) {
  response.contentType( 'json' );
  next();
});

app.get( '/:obj_type/list', function ( request, response ) {
  response.send({ title: request.params.obj_type + ' list' });
});

app.post( '/:obj_type/create', function ( request, response ) {
  response.send({ title: request.params.obj_type + ' created' });
});

app.get( '/:obj_type/read/:id([0-9]+)',
  function ( request, response ) {
    response.send({
      title: request.params.obj_type
        + ' with id ' + request.params.id + ' found'
    });
  }
);

app.post( '/:obj_type/update/:id([0-9]+)',
  function ( request, response ) {
    response.send({
      title: request.params.obj_type 
        + ' with id ' + request.params.id + ' updated'
    });
  }
);

app.get( '/:obj_type/delete/:id([0-9]+)',
  function ( request, response ) {
    response.send({
      title: request.params.obj_type 
        + ' with id ' + request.params.id + ' deleted'
    });
  }
);
// -------------- END SERVER CONFIGURATION ----------------

// ----------------- BEGIN START SERVER -------------------
server.listen( 3000 );
console.log(
  'Express server listening on port %d in %s mode',
   server.address().port, app.settings.env
);
// ------------------ END START SERVER --------------------
