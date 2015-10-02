/*
 * spa.js
 * Root namespace module
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

var spa = (function () {
  var initModule = function ( $container ) {
    $container.html(
      '<h1 style="display:inline-block; margin:25px;">'
<<<<<<< HEAD
        + 'Cool cat, lookin for a kitty'
=======
        + 'hello world!'
>>>>>>> 039aeaf7f6e22352497486bd0623a99cab469fa9
      + '</h1>'
    );
  };
  
  return { initModule: initModule };
}());
