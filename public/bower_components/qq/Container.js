/// <reference path="typings/tsd.d.ts"/>
/// <reference path="Component.ts"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var qq;
(function (qq) {
    var Container = (function (_super) {
        __extends(Container, _super);
        function Container() {
            _super.call(this);
            this._children = [];
        }
        Container.prototype.addChild = function (child) {
            this._children.push(child);
            this.html.appendChild(child.html);
        };

        Container.prototype.removeChild = function (child) {
            var index = this._children.indexOf(child);
            if (index !== -1) {
                this._children.splice(index, 1);
                this.html.removeChild(child.html);
            } else {
                throw new Error(child + ' is not a child of ' + this);
            }
        };

        Object.defineProperty(Container.prototype, "children", {
            get: function () {
                return this._children;
            },
            enumerable: true,
            configurable: true
        });
        return Container;
    })(qq.Component);
    qq.Container = Container;
})(qq || (qq = {}));
//# sourceMappingURL=Container.js.map
