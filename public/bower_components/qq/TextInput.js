/// <reference path="typings/tsd.d.ts"/>
/// <reference path="Text.ts"/>
/// <reference path="isEventSupported.ts"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var qq;
(function (qq) {
    var isInputEventSupported = qq.isEventSupported('input');

    var TextInput = (function (_super) {
        __extends(TextInput, _super);
        function TextInput() {
            _super.call(this);
            this.onInput = this.onInput.bind(this);
            this.html.setAttribute('contenteditable', 'true');

            if (isInputEventSupported) {
                this.html.addEventListener('input', this.onInput);
            } else {
                this.html.addEventListener('keydown', this.onInput);
            }
        }
        TextInput.prototype.onInput = function (event) {
            this.dispatchEvent(new tevents.Event('textChange'));
        };
        return TextInput;
    })(qq.Text);
    qq.TextInput = TextInput;
})(qq || (qq = {}));
//# sourceMappingURL=TextInput.js.map
