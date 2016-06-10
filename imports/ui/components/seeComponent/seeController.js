// import templates .. must import an template for every component
import template from './see.html';
import styles from './see.css'

//Import any DB Collections here


class seeController {
  constructor($scope, $routeParams) {

    $scope.viewModel(this);

    this.id = $routeParams.id;
    this.parties = 'hey';
  }
}


export default seeController
