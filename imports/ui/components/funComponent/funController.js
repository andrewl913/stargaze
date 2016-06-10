// import templates .. must import an template for every component
import template from './fun.html';
import styles from './fun.css'

//Import any DB Collections here


class funController {
  constructor($scope, $routeParams) {

    $scope.viewModel(this);

    this.id = $routeParams.id;
    this.parties = 'hey';
  }
}


export default funController
