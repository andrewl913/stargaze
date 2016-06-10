'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var esprima = require('esprima');
var beautify = require('gulp-beautify');
var properties = {};
var transformStream;
let importsPath = 'imports/ui/components/'


module.exports = yeoman.Base.extend({
  prompting: function () {
    // Have Yeoman greet the user.

    this.conflicter.force = true;

    this.log(yosay(
      'Let\'s build a meteor ' + chalk.blue('angular-component') + '!'
    ));
    transformStream = this.registerTransformStream;
    var prompts = [{
      type: 'input',
      name: 'title',
      message: 'Whats the name of this component?',
      default: 'test'
    }, {

      type:'confirm',
      name: 'wantsRoute',
      message: 'Would you like to add a route?',
      default: true
    }

  ];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
      this.log(props)
      properties = this.props;

    }.bind(this));
  },

  writing: function (props) {

    this.fs.copyTpl(
      this.templatePath('nameController.js'),
      this.destinationPath( importsPath + this.props.title+ 'Component/' + this.props.title + 'Controller.js'),
      {name: this.props.title}

    );

    this.fs.copyTpl(
      this.templatePath('name.css'),
      this.destinationPath(importsPath + this.props.title+ 'Component/' + this.props.title + '.css'),
      {name : this.props.title}
    );

    this.fs.copyTpl(
      this.templatePath('name.html'),
      this.destinationPath(importsPath + this.props.title+ 'Component/'+ this.props.title + '.html'),
      {name : this.props.title}
    );

    this.fs.copy(
      'imports/startup/client/index.js',
      this.destinationPath('imports/startup/client/index.js'), {
      process: addComponent
   });


   if(this.props.wantsRoute) {
     this.log('Adding that route for you!')
     this.fs.copy(
       'client/routes.js',
     this.destinationPath('client/routes.js'), {
       process: addRoute
     });
   }

  },

  install: function () {
    //no dependencies to install here
  }
});

function addComponent(content) {
 let title = properties.title
 var importComment = new RegExp('//end controllers', 'g');
 var componentComment = new RegExp('//end components', 'g');
 var newContent = content.toString().replace(importComment,
 `import ${title}Controller from '../../ui/components/${title}Component/${title}Controller.js'\n//end controllers`);

 newContent = newContent.toString().replace(componentComment,
   `app.component('${title}', {
  controller: ${title}Controller,
  templateUrl: componentsPath + '${title}Component/${title}.html'
})\n
//end components`)

 return newContent;
}


function addRoute(content) {
  let title = properties.title
  let routeComment = new RegExp('//end routes', 'g');
  let newContent = content.toString().replace(routeComment,
`   .when('/${title}' , {
      template: '<${title}></${title}>'
    })\n//end routes`
  )

  return newContent;
}
