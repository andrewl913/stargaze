// import all client startup
import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import ngRoute from 'angular-route';
import angularBootstrap from 'angular-ui-bootstrap'


//import controllers here
import heroesController from '../../ui/components/heroesComponent/heroesController.js'
import appController from '../../ui/components/appComponent/appController.js'
import commentController from '../../ui/components/commentComponent/commentController.js'

console.log(heroesController);

// use the angularMeteor as a module the hotsRank app will use
var app = angular.module('hotsRank', [angularMeteor, ngRoute, angularBootstrap, 'accounts.ui']);

const componentsPath = 'imports/ui/components/'

//add components to the app here.
app.component('heroes', {
  controller: heroesController,
  templateUrl: componentsPath + 'heroesComponent/heroes.html'
});

app.component('app', {
  controller: appController,
  templateUrl: componentsPath + 'appComponent/app.html'
});

app.component('comment', {
  controller: commentController,
  templateUrl: componentsPath + 'commentComponent/comment.html'
})

export default app
