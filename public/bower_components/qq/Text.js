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
    var Text = (function (_super) {
        __extends(Text, _super);
        function Text() {
            _super.call(this);
        }

        Object.defineProperty(Text.prototype, "text", {
            get: function () {
                return this.html.textContent;
            },
            set: function (text) {
                this.html.textContent = text;
                this.dispatchEvent(new tevents.Event('textChange'));
            },
            enumerable: true,
            configurable: true
        });
        return Text;
    })(qq.Component);
    qq.Text = Text;
})(qq || (qq = {}));
//# sourceMappingURL=Text.js.map
