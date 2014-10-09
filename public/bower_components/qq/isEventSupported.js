var qq;
(function (qq) {
    var TAGNAMES = {
        'select': 'input', 'change': 'input',
        'submit': 'form', 'reset': 'form',
        'error': 'img', 'load': 'img', 'abort': 'img'
    };

    function isEventSupported(eventName) {
        eventName = 'on' + eventName;
        if (document.documentElement.hasOwnProperty(eventName)) {
            return true;
        }
        var el = document.createElement(TAGNAMES[eventName] || 'div');
        if (el.hasOwnProperty(eventName)) {
            return true;
        }
        el.setAttribute(eventName, 'return;');
        return typeof el[eventName] == 'function';
    }
    qq.isEventSupported = isEventSupported;
})(qq || (qq = {}));
//# sourceMappingURL=isEventSupported.js.map
