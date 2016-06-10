// import templates .. must import an template for every component
import template from './fffe.html';
import styles from './fffe.css'

//Import any DB Collections here


class fffeController {
  constructor($scope, $routeParams) {

    $scope.viewModel(this);

    this.id = $routeParams.id;
    this.parties = 'hey';
  }
}


export default fffeController
