// import templates .. must import an template for every component
import template from './test.html';
import styles from './test.css'

//Import any DB Collections here


class testController {
  constructor($scope, $routeParams) {

    $scope.viewModel(this);

    this.id = $routeParams.id;
    this.parties = 'hey';
  }
}


export default testController
