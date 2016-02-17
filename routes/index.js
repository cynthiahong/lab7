var projects = require('../projects.json');

/*
 * GET home page.
 */

exports.view = function(req, res){
    projects["grids"] = false;
  	res.render('index', projects);

};

exports.viewGrid = function(req, res){
  projects["grids"]= true;
  res.render('index', projects);

}
