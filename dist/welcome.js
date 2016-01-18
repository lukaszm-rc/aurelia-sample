System.register(["aurelia-http-client"], function (_export) {
	"use strict";

	var HttpClient, Welcome;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	return {
		setters: [function (_aureliaHttpClient) {
			HttpClient = _aureliaHttpClient.HttpClient;
		}],
		execute: function () {
			Welcome = (function () {
				_createClass(Welcome, null, [{
					key: "inject",
					value: function inject() {
						return [HttpClient];
					}
				}]);

				function Welcome(http) {
					_classCallCheck(this, Welcome);

					this.http = http;
					this.posts = [];
					this.subreddit_url = "http://reddit.com/r/funny.json";
				}

				_createClass(Welcome, [{
					key: "loadPosts",
					value: function loadPosts() {
						var _this = this;

						return this.http.jsonp(this.subreddit_url, "jsonp").then(function (r) {
							_this.posts = r.response.data.children;
						});
					}
				}, {
					key: "activate",
					value: function activate() {
						return this.loadPosts();
					}
				}]);

				return Welcome;
			})();

			_export("Welcome", Welcome);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O2lCQUVhLE9BQU87Ozs7Ozs7O21DQUZaLFVBQVU7OztBQUVMLFVBQU87aUJBQVAsT0FBTzs7WUFFTixrQkFBRztBQUFFLGFBQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztNQUFFOzs7QUFFN0IsYUFKQyxPQUFPLENBSVAsSUFBSSxFQUFFOzJCQUpOLE9BQU87O0FBS2xCLFNBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2pCLFNBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0FBQ2hCLFNBQUksQ0FBQyxhQUFhLEdBQUcsZ0NBQWdDLENBQUM7S0FDdEQ7O2lCQVJXLE9BQU87O1lBVVYscUJBQUc7OztBQUtYLGFBQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDLEVBQUk7QUFFN0QsYUFBSyxLQUFLLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO09BQ3RDLENBQUMsQ0FBQztNQUNIOzs7WUFHTyxvQkFBRztBQUNWLGFBQU8sSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO01BQ3hCOzs7V0F4QlcsT0FBTyIsImZpbGUiOiJ3ZWxjb21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tICdhdXJlbGlhLWh0dHAtY2xpZW50JztcblxuZXhwb3J0IGNsYXNzIFdlbGNvbWUge1xuXHQvLyBEZXBlbmRlbmN5IGluamVjdCB0aGUgSHR0cENsaWVudFxuXHRzdGF0aWMgaW5qZWN0KCkgeyByZXR1cm4gW0h0dHBDbGllbnRdOyB9XG5cblx0Y29uc3RydWN0b3IoaHR0cCkge1xuXHRcdHRoaXMuaHR0cCA9IGh0dHA7IC8vIEFzc2lnbiB0aGUgaHR0cCBjbGllbnQgZm9yIHVzZSBsYXRlclxuXHRcdHRoaXMucG9zdHMgPSBbXTtcblx0XHR0aGlzLnN1YnJlZGRpdF91cmwgPSBcImh0dHA6Ly9yZWRkaXQuY29tL3IvZnVubnkuanNvblwiO1xuXHR9XG5cblx0bG9hZFBvc3RzKCkge1xuXHRcdC8vIEF1cmVsaWEncyBodHRwIGNsaWVudCBwcm92aWRlcyB1cyB3aXRoIGEganNvbnAgbWV0aG9kIGZvclxuXHRcdC8vIGdldHRpbmcgYXJvdW5kIENPUlMgaXNzdWVzLiBUaGUgc2Vjb25kIHBhcmFtIGlzIHRoZSBjYWxsYmFja1xuXHRcdC8vIG5hbWUgd2hpY2ggcmVkZGl0IHJlcXVpcmVzIHRvIGJlIFwianNvbnBcIlxuXG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5qc29ucCh0aGlzLnN1YnJlZGRpdF91cmwsIFwianNvbnBcIikudGhlbihyID0+IHtcblx0XHRcdC8vIEFzc2lnbiB0aGUgbGlzdCBvZiBwb3N0cyBmcm9tIHRoZSBqc29uIHJlc3BvbnNlIGZyb20gcmVkZGl0XG5cdFx0XHR0aGlzLnBvc3RzID0gci5yZXNwb25zZS5kYXRhLmNoaWxkcmVuO1xuXHRcdH0pO1xuXHR9XG5cblx0Ly8gVGhpcyBpcyBjYWxsZWQgb25jZSB3aGVuIHRoZSByb3V0ZSBhY3RpdmF0ZXNcblx0YWN0aXZhdGUoKSB7XG5cdFx0cmV0dXJuIHRoaXMubG9hZFBvc3RzKCk7XG5cdH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
