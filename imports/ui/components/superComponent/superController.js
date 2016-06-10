// import templates .. must import an template for every component
import template from './super.html';
import styles from './super.css'

//Import any DB Collections here


class superController {
  constructor($scope, $routeParams) {

    $scope.viewModel(this);

    this.id = $routeParams.id;
    this.parties = 'hey';
  }
}


export default superController
