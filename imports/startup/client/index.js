// import all client startup
import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import ngRoute from 'angular-route';
import angularBootstrap from 'angular-ui-bootstrap'


//import controllers here
import superController from '../../ui/components/superComponent/superController.js'
import amazingController from '../../ui/components/amazingComponent/amazingController.js'
import funController from '../../ui/components/funComponent/funController.js'
import greatController from '../../ui/components/greatComponent/greatController.js'
//end controllers

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

app.component('super', {
  controller: superController,
  templateUrl: componentsPath + 'superComponent/super.html'
})

app.component('amazing', {
  controller: amazingController,
  templateUrl: componentsPath + 'amazingComponent/amazing.html'
})

app.component('fun', {
  controller: funController,
  templateUrl: componentsPath + 'funComponent/fun.html'
})

app.component('great', {
  controller: greatController,
  templateUrl: componentsPath + 'greatComponent/great.html'
})

//end components

export default app
