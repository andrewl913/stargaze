// import templates .. must import an template for every component
import template from './awesome.html';
import styles from './awesome.css'

//Import any DB Collections here


class awesomeController {
  constructor($scope, $routeParams) {

    $scope.viewModel(this);

    this.id = $routeParams.id;
    this.parties = 'hey';
  }
}


export default awesomeController
