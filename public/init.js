/// <reference path="bower_components/qq/qq.ts"/>
var app = new qq.Application();
var text = new qq.Text();
var input = new qq.TextInput();
var hgroup = new qq.HGroup();

app.domRoot = document.getElementsByTagName('body')[0];

hgroup.addChild(input);
hgroup.addChild(text);
app.addChild(hgroup);

input.text = 'abc';
input.width = 100;
text.widthPercent = 30;

input.on('textChange', function () {
    return text.text = input.text;
});
//# sourceMappingURL=init.js.map
