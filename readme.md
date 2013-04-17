#Congo Advanced: a fork of the Backbone MongoDB Explorer from Tekpub

This fork of Congo adds some of the workflow tools used by modern developers:
	*	Coffeescript for preprocessing and awesomely readable files
	*	RequireJS to handle auto-loading of all of those Models, Views, Controllers, etc.
	*	Guard
		*	Compiles Coffeescript into JS
		*	Handles LiveReload on changes in views, css, and/or js files
	*	Jam to concatenate and sweeten up working with RequireJS

## Requirements

To get this project running you will need the following:
	*	[NodeJS](http://nodejs.org/)
	*	[Express](http://expressjs.com)
	*	[Guard](https://github.com/guard/guard)
	*	[Guard:coffeescript](https://github.com/guard/guard-coffeescript)
	*	[Guard:livereload](https://github.com/guard/guard-livereload)
	*	[Jam](http://jamjs.org)

## Getting up and running

	1.	Install [NodeJS](http://nodejs.org)
	2. 	Clone this repository `git clone git://github.com/rtablada/congo`
	3.	Run `npm install express`
	4.	Install Guard and the guard packages
		*	`gem install guard`
		*	`gem install rb-fsevent`
		*	`gem install guard-coffeescript`
		*	`gem install guard-livereload`
	5. 	Install Jam - `npm install -g jamjs`
	6.	Run `jam install`
	7.	Run `guard`
	8.	Run `node server`
	8.	Edit away