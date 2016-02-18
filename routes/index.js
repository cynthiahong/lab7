var projects = require('../projects.json');

/*
 * GET home page.
 */

exports.view = function(req, res){
  var random_num = Math.random();
  console.log(random_num);

  if (random_num >= 0) {
    projects['grid'] = false;
    res.render('index', projects);
  } else {
    res.redirect('/grid');
  }
};


exports.view = function(req, res){
    projects["grids"] = false;
  	res.render('index', projects);

};

exports.viewGrid = function(req, res){
  projects["grids"]= true;
  res.render('index', projects);

}
