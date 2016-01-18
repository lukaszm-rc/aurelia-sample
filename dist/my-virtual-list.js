System.register([], function (_export) {
	'use strict';

	var MyVirtualList;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	return {
		setters: [],
		execute: function () {
			MyVirtualList = (function () {
				function MyVirtualList() {
					_classCallCheck(this, MyVirtualList);

					this.postsArray = ['Foo', 'Bar', 'Baz'];

					this.subreddit_url = "http://reddit.com/r/funny.json";
				}

				_createClass(MyVirtualList, [{
					key: 'getItem',
					value: function getItem(item) {

						return item.title;
					}
				}, {
					key: 'activate',
					value: function activate() {
						for (var i = 0; i < 100; i++) {
							this.postsArray.push("aa");
						}
					}
				}]);

				return MyVirtualList;
			})();

			_export('MyVirtualList', MyVirtualList);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LXZpcnR1YWwtbGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7S0FDYSxhQUFhOzs7Ozs7Ozs7QUFBYixnQkFBYTtBQU1kLGFBTkMsYUFBYSxHQU1YOzJCQU5GLGFBQWE7O1VBSXpCLFVBQVUsR0FBRyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDOztBQUtqQyxTQUFJLENBQUMsYUFBYSxHQUFHLGdDQUFnQyxDQUFDO0tBQ3REOztpQkFWVyxhQUFhOztZQVdsQixpQkFBQyxJQUFJLEVBQUU7O0FBRWIsYUFBTyxJQUFJLENBQUMsS0FBSyxDQUFBO01BR2pCOzs7WUFnQk8sb0JBQUc7QUFDVixXQUFJLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBQyxDQUFDLEdBQUMsR0FBRyxFQUFDLENBQUMsRUFBRSxFQUFFO0FBQ3RCLFdBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO09BQzNCO01BRUQ7OztXQXJDVyxhQUFhIiwiZmlsZSI6Im15LXZpcnR1YWwtbGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tICdhdXJlbGlhLWh0dHAtY2xpZW50JztcbmV4cG9ydCBjbGFzcyBNeVZpcnR1YWxMaXN0IHtcblx0Ly8gRGVwZW5kZW5jeSBpbmplY3QgdGhlIEh0dHBDbGllbnRcblx0Ly9zdGF0aWMgaW5qZWN0KCkgeyByZXR1cm4gW0h0dHBDbGllbnRdOyB9XG5cblx0cG9zdHNBcnJheSA9IFsnRm9vJywgJ0JhcicsICdCYXonXTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHQvL3RoaXMucG9zdHNBcnJheSA9IFtdO1xuXHRcdC8vdGhpcy5odHRwID0gaHR0cDsgLy8gQXNzaWduIHRoZSBodHRwIGNsaWVudCBmb3IgdXNlIGxhdGVyXG5cdFx0dGhpcy5zdWJyZWRkaXRfdXJsID0gXCJodHRwOi8vcmVkZGl0LmNvbS9yL2Z1bm55Lmpzb25cIjtcblx0fVxuXHRnZXRJdGVtKGl0ZW0pIHtcblxuXHRcdHJldHVybiBpdGVtLnRpdGxlXG5cblxuXHR9XG5cdC8vbG9hZFBvc3RzKCkge1xuXHQvL1x0Ly8gQXVyZWxpYSdzIGh0dHAgY2xpZW50IHByb3ZpZGVzIHVzIHdpdGggYSBqc29ucCBtZXRob2QgZm9yXG5cdC8vXHQvLyBnZXR0aW5nIGFyb3VuZCBDT1JTIGlzc3Vlcy4gVGhlIHNlY29uZCBwYXJhbSBpcyB0aGUgY2FsbGJhY2tcblx0Ly9cdC8vIG5hbWUgd2hpY2ggcmVkZGl0IHJlcXVpcmVzIHRvIGJlIFwianNvbnBcIlxuXHQvL1xuXHQvL1x0dGhpcy5odHRwLmpzb25wKHRoaXMuc3VicmVkZGl0X3VybCwgXCJqc29ucFwiKS50aGVuKHIgPT4ge1xuXHQvL1x0XHQvLyBBc3NpZ24gdGhlIGxpc3Qgb2YgcG9zdHMgZnJvbSB0aGUganNvbiByZXNwb25zZSBmcm9tIHJlZGRpdFxuXHQvL1x0XHRmb3IodmFyIGk9MDtpPCByLnJlc3BvbnNlLmRhdGEuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcblx0Ly9cdFx0XHR0aGlzLnBvc3RzQXJyYXkucHVzaCh0aGlzLmdldEl0ZW0oci5yZXNwb25zZS5kYXRhLmNoaWxkcmVuW2ldLmRhdGEpKTtcblx0Ly9cdFx0fVxuXHQvL1x0XHRjb25zb2xlLmxvZyh0aGlzLnBvc3RzQXJyYXkpO1xuXHQvL1x0fSk7XG5cdC8vfVxuXG5cdC8vIFRoaXMgaXMgY2FsbGVkIG9uY2Ugd2hlbiB0aGUgcm91dGUgYWN0aXZhdGVzXG5cdGFjdGl2YXRlKCkge1xuXHRcdGZvcih2YXIgaT0wO2k8MTAwO2krKykge1xuXHRcdFx0dGhpcy5wb3N0c0FycmF5LnB1c2goXCJhYVwiKTtcblx0XHR9XG5cdFx0Ly9yZXR1cm4gdGhpcy5wb3N0c0FycmF5O1xuXHR9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
