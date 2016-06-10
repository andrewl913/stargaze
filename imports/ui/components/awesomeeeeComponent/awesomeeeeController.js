// import templates .. must import an template for every component
import template from './awesomeeee.html';
import styles from './awesomeeee.css'

//Import any DB Collections here


class awesomeeeeController {
  constructor($scope, $routeParams) {

    $scope.viewModel(this);

    this.id = $routeParams.id;
    this.parties = 'hey';
  }
}


export default awesomeeeeController
