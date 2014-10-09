/// <reference path="typings/tsd.d.ts"/>
/// <reference path="Container.ts"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var qq;
(function (qq) {
    var Component = (function (_super) {
        __extends(Component, _super);
        function Component() {
            _super.call(this);
            this._html = document.createElement('div');
        }
        Object.defineProperty(Component.prototype, "html", {
            get: function () {
                return this._html;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(Component.prototype, "parent", {
            get: function () {
                return this._parent;
            },
            set: function (parent) {
                this._parent = parent;
                if (parent) {
                    this.dispatchEvent(new tevents.Event('added'));
                } else {
                    this.dispatchEvent(new tevents.Event('removed'));
                }
            },
            enumerable: true,
            configurable: true
        });


        Object.defineProperty(Component.prototype, "widthPercent", {
            get: function () {
                return this._widthPercent;
            },
            set: function (widthPercent) {
                this._widthPercent = widthPercent;
                this.html.style.width = widthPercent + '%';
                this.dispatchEvent(new tevents.Event('widthChange'));
            },
            enumerable: true,
            configurable: true
        });


        Object.defineProperty(Component.prototype, "width", {
            get: function () {
                return this._width;
            },
            set: function (width) {
                this._width = width;
                this.html.style.width = width + 'px';
                this.dispatchEvent(new tevents.Event('widthChange'));
            },
            enumerable: true,
            configurable: true
        });

        return Component;
    })(tevents.Dispatcher);
    qq.Component = Component;
})(qq || (qq = {}));
//# sourceMappingURL=Component.js.map
