// define all angular front end routing here
import app from '../imports/startup/client/index';

app.config(config);

/* Angular routing in this application will link template components,
  logic for controllers will attach to the component, not the url.

  Params will still be accessible via the controllers without specifying the controller as
  and route option
*/

function config($routeProvider) {

  $routeProvider
  //begin Routes
    .when('/heroes', {
      template: '<heroes></heroes>'
    })
    .when('/heroes/:id', {
      template: '<heroes></heroes>',
    })
    .when('/user' , {
      template: '<user></user>'
    })
    .when('/nice' , {
      template: '<nice></nice>'
    })
    .when('/nice' , {
      template: '<nice></nice>'
    })
    .when('/same' , {
      template: '<same></same>'
    })
   .when('/trying' , {
      template: '<trying></trying>'
    })
   .when('/test' , {
      template: '<test></test>'
    })
   .when('/should' , {
      template: '<should></should>'
    })
//end routes
}
