var mysql = require('mysql');
var config = require('./config.json');
var express = require('express');
var request = require('request');
var url = require('url');
var ujs = require('ejs');
var app = express();


var con = mysql.createConnection(config);
con.connect(function (err) {
	if (err) {
		console.log(err);
	}
	return;
});


app.get('/', function (req, res) {
	con.query("SELECT id,name,url,description,`date` " +
		"FROM blog " +
		"WHERE public = 1 " +
		"ORDER BY id DESC " +
		"LIMIT 20", function (err, rows) {
		if (err) {
			console.log(err);
			return;
		}
		console.log(rows);
		res.render(__dirname + '/views/index.ejs', {blogItems: rows});
	})
});


app.get('/clanek/:articleUrl', function (req, res) {
	var articleUrl = req.params.articleUrl;
	con.query("SELECT id,name,url,description,`date`,text " +
		"FROM blog " +
		"WHERE public = 1 " +
		"AND url = '" + articleUrl + "' ",
		function (err, row) {
			if (err) {
				console.log(err);
				return;
			}
			console.log(row);
			res.render(__dirname + '/views/article.ejs', {article: row[0]});
		})
});

app.listen(8081);
