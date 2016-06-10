// import templates .. must import an template for every component
import template from './cool.html';
import styles from './cool.css'

//Import any DB Collections here


class coolController {
  constructor($scope, $routeParams) {

    $scope.viewModel(this);

    this.id = $routeParams.id;
    this.parties = 'hey';
  }
}


export default coolController
