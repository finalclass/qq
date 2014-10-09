/// <reference path="typings/tsd.d.ts"/>
/// <reference path="Component.ts"/>
/// <reference path="Container.ts"/>
/// <reference path="Application.ts"/>
/// <reference path="HGroup.ts"/>
/// <reference path="Text.ts"/>
/// <reference path="TextInput.ts"/>
/// <reference path="isEventSupported.ts"/>

module qq {
  var docRoot:string[] = $('script').last().attr('src').split('/');
  docRoot.pop();
  var dir:string = docRoot.join('/');

  [
    '../tevents/tevents',
    'isEventSupported',
    'Component',
    'Container',
    'Application',
    'HGroup',
    'Text',
    'TextInput'
  ]
    .forEach((file:string):void => {
      document.write('<script src="' + dir + '/' + file + '.js' + '"></script>');
    });
}

