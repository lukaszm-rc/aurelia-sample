import {Router} from "aurelia-router";

export class App {
	static inject() {
		return [Router];
	}

	message = "Welcome to Aurelia";

	constructor(router) {
		this.router = router;
		this.router.configure(config => {
			config.title = 'Aurelia';
			config.map([{
				route : ["","welcome"], // Activate this route by default or when on /foo
				moduleId : "pages/welcome", // When active, load foo.js and foo.html (module)
				name : "welcome",
				nav : true, // Add this route to the list of navigable routes (used for building UI)
				title : "Welcome" // Used in the creation of a pages title
			}]);

			this.router = router;
		});
	}
}
