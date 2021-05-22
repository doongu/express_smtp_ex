var express = require('express');
var router = express.Router();

var mailer = require('./mail');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'email_sample' });
});

router.get('/email', function(req, res, next) {
	
	const email = req.query.email;

	let emailParam = {
		toEmail : email,
		subject : "test 제목입니다.",
		text : "안녕하세요 test 내용입니다. "
	};

	mailer.sendGmail(emailParam);

	res.render('email', { email: email});
});
module.exports = router;
