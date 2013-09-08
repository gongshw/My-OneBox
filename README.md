My-OneBox (MOB)
=========

A Chrome extension that shows my own one box when using google search.

Features
--------
 * Key words driven
 * Scalability
 * Programmable
 * Same style as default one box
 * 3 kinds of methods to extend
 	* pure local javascript
 	* local javascript + ajax request
 	* remote json API
 	

Pure Local Javascript
---------------------
Useing local javascript code, you can implement some simple MOB extention. For example, the "nongli" extension that show today's lunar calendar when search "农历". You may write a js function that returns the following object:

	{
		title:"农历",
		description:"癸巳(蛇)年农历八月初五"
	}

Local Javascript + Ajax Request
-------------------------------
Sometimes you must do something with the help of other web service. For example, show book information when search the ISBN. In this condition, you may need send some request to Google Book API. Similar as pure local js solution, you need write js function with ajax. you need call the following function to show your one box when all request done:

	mob.show(title,description);

Remote JSON Api
---------------
If you have your own server, you can simply tell MOB your key words pattern and the url of your service. We need your remote service return feedback in following JSON format:

	{
		"title":"农历",
		"description":"癸巳(蛇)年农历八月初五"
	}
	
Some Hint When Implementing Your One Box
----------------------------------------
 * No DOM Operation
 * Pure Javascript
 	* No Third-party Libraries
 	* No plugins
 * A tiny and helpful MOB library
 	* ajax request

More In The Future
------------------
 * interactable one box
 * style and theme