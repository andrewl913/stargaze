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
import awesoController from '../../ui/components/awesoComponent/awesoController.js'
import simpleController from '../../ui/components/simpleComponent/simpleController.js'
import niceController from '../../ui/components/niceComponent/niceController.js'
import niceController from '../../ui/components/niceComponent/niceController.js'
import sameController from '../../ui/components/sameComponent/sameController.js'
import starnageController from '../../ui/components/starnageComponent/starnageController.js'
import lastController from '../../ui/components/lastComponent/lastController.js'
import coolRouteController from '../../ui/components/coolRouteComponent/coolRouteController.js'
import trythingController from '../../ui/components/trythingComponent/trythingController.js'
import tryingController from '../../ui/components/tryingComponent/tryingController.js'
import testController from '../../ui/components/testComponent/testController.js'
import shouldController from '../../ui/components/shouldComponent/shouldController.js'
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

app.component('aweso', {
  controller: awesoController,
  templateUrl: componentsPath + 'awesoComponent/aweso.html'
})

app.component('simple', {
  controller: simpleController,
  templateUrl: componentsPath + 'simpleComponent/simple.html'
})

app.component('nice', {
  controller: niceController,
  templateUrl: componentsPath + 'niceComponent/nice.html'
})

app.component('nice', {
  controller: niceController,
  templateUrl: componentsPath + 'niceComponent/nice.html'
})

app.component('same', {
  controller: sameController,
  templateUrl: componentsPath + 'sameComponent/same.html'
})

app.component('starnage', {
  controller: starnageController,
  templateUrl: componentsPath + 'starnageComponent/starnage.html'
})

app.component('last', {
  controller: lastController,
  templateUrl: componentsPath + 'lastComponent/last.html'
})

app.component('coolRoute', {
  controller: coolRouteController,
  templateUrl: componentsPath + 'coolRouteComponent/coolRoute.html'
})

app.component('trything', {
  controller: trythingController,
  templateUrl: componentsPath + 'trythingComponent/trything.html'
})

app.component('trying', {
  controller: tryingController,
  templateUrl: componentsPath + 'tryingComponent/trying.html'
})

app.component('test', {
  controller: testController,
  templateUrl: componentsPath + 'testComponent/test.html'
})

app.component('should', {
  controller: shouldController,
  templateUrl: componentsPath + 'shouldComponent/should.html'
})

//end components

export default app
