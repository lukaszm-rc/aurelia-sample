System.register(["aurelia-router"], function (_export) {
	"use strict";

	var Router, App;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	return {
		setters: [function (_aureliaRouter) {
			Router = _aureliaRouter.Router;
		}],
		execute: function () {
			App = (function () {
				_createClass(App, null, [{
					key: "inject",
					value: function inject() {
						return [Router];
					}
				}]);

				function App(router) {
					var _this = this;

					_classCallCheck(this, App);

					this.message = "Welcome to Aurelia";

					this.router = router;
					this.router.configure(function (config) {
						config.title = 'Aurelia';
						config.map([{
							route: ["", "welcome"],
							moduleId: "welcome",
							name: "welcome",
							nav: true,
							title: "Welcome" }, {
							route: ["my-virtual-list"],
							moduleId: "my-virtual-list",
							name: "virtual-list",
							nav: true,
							title: "virtual-list" }]);

						_this.router = router;
					});
				}

				return App;
			})();

			_export("App", App);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7YUFFYSxHQUFHOzs7Ozs7OzsyQkFGUixNQUFNOzs7QUFFRCxNQUFHO2lCQUFILEdBQUc7O1lBQ0Ysa0JBQUc7QUFDZixhQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7TUFDaEI7OztBQUlVLGFBUEMsR0FBRyxDQU9ILE1BQU0sRUFBRTs7OzJCQVBSLEdBQUc7O1VBS2YsT0FBTyxHQUFHLG9CQUFvQjs7QUFHN0IsU0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7QUFDckIsU0FBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNLEVBQUk7QUFDL0IsWUFBTSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7QUFDekIsWUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ1gsWUFBSyxFQUFHLENBQUMsRUFBRSxFQUNWLFNBQVMsQ0FBQztBQUNYLGVBQVEsRUFBRyxTQUFTO0FBQ3BCLFdBQUksRUFBRyxTQUFTO0FBQ2hCLFVBQUcsRUFBRyxJQUFJO0FBQ1YsWUFBSyxFQUFHLFNBQVMsRUFDakIsRUFDQTtBQUNDLFlBQUssRUFBRyxDQUFDLGlCQUFpQixDQUFDO0FBQzNCLGVBQVEsRUFBRyxpQkFBaUI7QUFDNUIsV0FBSSxFQUFHLGNBQWM7QUFDckIsVUFBRyxFQUFHLElBQUk7QUFDVixZQUFLLEVBQUcsY0FBYyxFQUN0QixDQUFDLENBQUMsQ0FBQzs7QUFFTCxZQUFLLE1BQU0sR0FBRyxNQUFNLENBQUM7TUFDckIsQ0FBQyxDQUFDO0tBQ0g7O1dBN0JXLEdBQUciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtSb3V0ZXJ9IGZyb20gXCJhdXJlbGlhLXJvdXRlclwiO1xuXG5leHBvcnQgY2xhc3MgQXBwIHtcblx0c3RhdGljIGluamVjdCgpIHtcblx0XHRyZXR1cm4gW1JvdXRlcl07XG5cdH1cblxuXHRtZXNzYWdlID0gXCJXZWxjb21lIHRvIEF1cmVsaWFcIjtcblxuXHRjb25zdHJ1Y3Rvcihyb3V0ZXIpIHtcblx0XHR0aGlzLnJvdXRlciA9IHJvdXRlcjtcblx0XHR0aGlzLnJvdXRlci5jb25maWd1cmUoY29uZmlnID0+IHtcblx0XHRcdGNvbmZpZy50aXRsZSA9ICdBdXJlbGlhJztcblx0XHRcdGNvbmZpZy5tYXAoW3tcblx0XHRcdFx0cm91dGUgOiBbXCJcIixcblx0XHRcdFx0XHRcIndlbGNvbWVcIl0sIC8vIEFjdGl2YXRlIHRoaXMgcm91dGUgYnkgZGVmYXVsdCBvciB3aGVuIG9uIC9mb29cblx0XHRcdFx0bW9kdWxlSWQgOiBcIndlbGNvbWVcIiwgLy8gV2hlbiBhY3RpdmUsIGxvYWQgZm9vLmpzIGFuZCBmb28uaHRtbCAobW9kdWxlKVxuXHRcdFx0XHRuYW1lIDogXCJ3ZWxjb21lXCIsXG5cdFx0XHRcdG5hdiA6IHRydWUsIC8vIEFkZCB0aGlzIHJvdXRlIHRvIHRoZSBsaXN0IG9mIG5hdmlnYWJsZSByb3V0ZXMgKHVzZWQgZm9yIGJ1aWxkaW5nIFVJKVxuXHRcdFx0XHR0aXRsZSA6IFwiV2VsY29tZVwiIC8vIFVzZWQgaW4gdGhlIGNyZWF0aW9uIG9mIGEgcGFnZXMgdGl0bGVcblx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRyb3V0ZSA6IFtcIm15LXZpcnR1YWwtbGlzdFwiXSwgLy8gQWN0aXZhdGUgdGhpcyByb3V0ZSBieSBkZWZhdWx0IG9yIHdoZW4gb24gL2Zvb1xuXHRcdFx0XHRcdG1vZHVsZUlkIDogXCJteS12aXJ0dWFsLWxpc3RcIiwgLy8gV2hlbiBhY3RpdmUsIGxvYWQgZm9vLmpzIGFuZCBmb28uaHRtbCAobW9kdWxlKVxuXHRcdFx0XHRcdG5hbWUgOiBcInZpcnR1YWwtbGlzdFwiLFxuXHRcdFx0XHRcdG5hdiA6IHRydWUsIC8vIEFkZCB0aGlzIHJvdXRlIHRvIHRoZSBsaXN0IG9mIG5hdmlnYWJsZSByb3V0ZXMgKHVzZWQgZm9yIGJ1aWxkaW5nIFVJKVxuXHRcdFx0XHRcdHRpdGxlIDogXCJ2aXJ0dWFsLWxpc3RcIiAvLyBVc2VkIGluIHRoZSBjcmVhdGlvbiBvZiBhIHBhZ2VzIHRpdGxlXG5cdFx0XHRcdH1dKTtcblxuXHRcdFx0dGhpcy5yb3V0ZXIgPSByb3V0ZXI7XG5cdFx0fSk7XG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
