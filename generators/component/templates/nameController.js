// import templates .. must import an template for every component
import template from './<%= name.lowerCaseFirstLetter() %>.html';
import styles from './<%= name.lowerCaseFirstLetter() %>.scss'

//Import any DB Collections here


class <%= name %>Controller {
  constructor($scope, $routeParams) {

    $scope.viewModel(this);

    this.id = $routeParams.id;
    this.parties = 'hey';
  }
}


export default <%=name %>Controller
