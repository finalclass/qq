module qq {

  var TAGNAMES = {
    'select':'input','change':'input',
    'submit':'form','reset':'form',
    'error':'img','load':'img','abort':'img'
  };

  export function isEventSupported(eventName:string) {
    eventName = 'on' + eventName;
    if (document.documentElement.hasOwnProperty(eventName)) {
      return true;
    }
    var el:HTMLElement = document.createElement(TAGNAMES[eventName] || 'div');
    if (el.hasOwnProperty(eventName)) {
      return true;
    }
    el.setAttribute(eventName, 'return;');
    return typeof el[eventName] == 'function';
  }

}