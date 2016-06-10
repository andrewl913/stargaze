// import templates .. must import an template for every component
import template from './best.html';
import styles from './best.css'

//Import any DB Collections here


class bestController {
  constructor($scope, $routeParams) {

    $scope.viewModel(this);

    this.id = $routeParams.id;
    this.parties = 'hey';
  }
}


export default bestController
