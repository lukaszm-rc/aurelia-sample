//import {HttpClient} from 'aurelia-http-client';
export class MyVirtualList {
	// Dependency inject the HttpClient
	//static inject() { return [HttpClient]; }

	postsArray = ['Foo', 'Bar', 'Baz'];

	constructor() {
		//this.postsArray = [];
		//this.http = http; // Assign the http client for use later
		this.subreddit_url = "http://reddit.com/r/funny.json";
	}
	getItem(item) {

		return item.title


	}
	//loadPosts() {
	//	// Aurelia's http client provides us with a jsonp method for
	//	// getting around CORS issues. The second param is the callback
	//	// name which reddit requires to be "jsonp"
	//
	//	this.http.jsonp(this.subreddit_url, "jsonp").then(r => {
	//		// Assign the list of posts from the json response from reddit
	//		for(var i=0;i< r.response.data.children.length; i++) {
	//			this.postsArray.push(this.getItem(r.response.data.children[i].data));
	//		}
	//		console.log(this.postsArray);
	//	});
	//}

	// This is called once when the route activates
	activate() {
		for(var i=0;i<100;i++) {
			this.postsArray.push("aa");
		}
		//return this.postsArray;
	}
}