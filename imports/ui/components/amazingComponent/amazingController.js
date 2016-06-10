// import templates .. must import an template for every component
import template from './amazing.html';
import styles from './amazing.css'

//Import any DB Collections here


class amazingController {
  constructor($scope, $routeParams) {

    $scope.viewModel(this);

    this.id = $routeParams.id;
    this.parties = 'hey';
  }
}


export default amazingController
