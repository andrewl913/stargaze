// import templates .. must import an template for every component
import template from './nope.html';
import styles from './nope.css'

//Import any DB Collections here


class nopeController {
  constructor($scope, $routeParams) {

    $scope.viewModel(this);

    this.id = $routeParams.id;
    this.parties = 'hey';
  }
}


export default nopeController
