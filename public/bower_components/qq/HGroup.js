/// <reference path="typings/tsd.d.ts"/>
/// <reference path="Container.ts"/>
/// <reference path="Component.ts"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var qq;
(function (qq) {
    var HGroup = (function (_super) {
        __extends(HGroup, _super);
        function HGroup() {
            _super.call(this);
            this.html.style.display = 'flex';
        }
        return HGroup;
    })(qq.Container);
    qq.HGroup = HGroup;
})(qq || (qq = {}));
//# sourceMappingURL=HGroup.js.map
