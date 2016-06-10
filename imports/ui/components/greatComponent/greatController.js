// import templates .. must import an template for every component
import template from './great.html';
import styles from './great.css'

//Import any DB Collections here


class greatController {
  constructor($scope, $routeParams) {

    $scope.viewModel(this);

    this.id = $routeParams.id;
    this.parties = 'hey';
  }
}


export default greatController
