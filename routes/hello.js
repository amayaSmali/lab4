
/*
 * GET home page.
 */

exports.view = function(req, res){
  var nameToShow = req.param.userName; //??
  res.render('hello', {
  	'name': nameToShow,
  });
};
