/// <reference path="typings/tsd.d.ts"/>
/// <reference path="Component.ts"/>
/// <reference path="Container.ts"/>
/// <reference path="Application.ts"/>
/// <reference path="HGroup.ts"/>
/// <reference path="Text.ts"/>
/// <reference path="TextInput.ts"/>
/// <reference path="isEventSupported.ts"/>
var qq;
(function (qq) {
    var docRoot = $('script').last().attr('src').split('/');
    docRoot.pop();
    var dir = docRoot.join('/');

    [
        '../tevents/tevents',
        'isEventSupported',
        'Component',
        'Container',
        'Application',
        'HGroup',
        'Text',
        'TextInput'
    ].forEach(function (file) {
        document.write('<script src="' + dir + '/' + file + '.js' + '"></script>');
    });
})(qq || (qq = {}));
//# sourceMappingURL=qq.js.map
