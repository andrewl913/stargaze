// import templates .. must import an template for every component
import template from './text.html';
import styles from './text.css'

//Import any DB Collections here


class textController {
  constructor($scope, $routeParams) {

    $scope.viewModel(this);

    this.id = $routeParams.id;
    this.parties = 'hey';
  }
}


export default textController
