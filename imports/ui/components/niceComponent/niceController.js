// import templates .. must import an template for every component
import template from './nice.html';
import styles from './nice.css'

//Import any DB Collections here


class niceController {
  constructor($scope, $routeParams) {

    $scope.viewModel(this);

    this.id = $routeParams.id;
    this.parties = 'hey';
  }
}


export default niceController
