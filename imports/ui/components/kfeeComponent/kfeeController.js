// import templates .. must import an template for every component
import template from './kfee.html';
import styles from './kfee.css'

//Import any DB Collections here


class kfeeController {
  constructor($scope, $routeParams) {

    $scope.viewModel(this);

    this.id = $routeParams.id;
    this.parties = 'hey';
  }
}


export default kfeeController
