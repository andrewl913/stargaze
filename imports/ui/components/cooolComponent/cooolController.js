// import templates .. must import an template for every component
import template from './coool.html';
import styles from './coool.css'

//Import any DB Collections here


class cooolController {
  constructor($scope, $routeParams) {

    $scope.viewModel(this);

    this.id = $routeParams.id;
    this.parties = 'hey';
  }
}


export default cooolController
