/// <reference path="bower_components/qq/qq.ts"/>

var app:qq.Application = new qq.Application();
var text:qq.Text = new qq.Text();
var input:qq.TextInput = new qq.TextInput();
var hgroup:qq.HGroup = new qq.HGroup();

app.domRoot = document.getElementsByTagName('body')[0];

hgroup.addChild(input);
hgroup.addChild(text);
app.addChild(hgroup);

input.text = 'abc';
input.width = 100;
text.widthPercent = 30;

input.on('textChange', () => text.text = input.text);