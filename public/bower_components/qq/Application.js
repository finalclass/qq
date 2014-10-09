/// <reference path="typings/tsd.d.ts"/>
/// <reference path="Container"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var qq;
(function (qq) {
    var Application = (function (_super) {
        __extends(Application, _super);
        function Application() {
            _super.call(this);
        }

        Object.defineProperty(Application.prototype, "domRoot", {
            get: function () {
                return this._domRoot;
            },
            set: function (root) {
                this._domRoot = root;
                this._domRoot.appendChild(this.html);
            },
            enumerable: true,
            configurable: true
        });
        return Application;
    })(qq.Container);
    qq.Application = Application;
})(qq || (qq = {}));
//# sourceMappingURL=Application.js.map
