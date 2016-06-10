// import templates .. must import an template for every component
import template from './niceeee.html';
import styles from './niceeee.css'

//Import any DB Collections here


class niceeeeController {
  constructor($scope, $routeParams) {

    $scope.viewModel(this);

    this.id = $routeParams.id;
    this.parties = 'hey';
  }
}


export default niceeeeController
