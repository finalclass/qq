/// <reference path="typings/tsd.d.ts"/>
/// <reference path="Text.ts"/>
/// <reference path="isEventSupported.ts"/>

module qq {

  var isInputEventSupported:boolean = isEventSupported('input');

  export class TextInput extends Text {

    constructor() {
      super();
      this.onInput = this.onInput.bind(this);
      this.html.setAttribute('contenteditable', 'true');

      if (isInputEventSupported) {
        this.html.addEventListener('input', this.onInput);
      } else {
        this.html.addEventListener('keydown', this.onInput);
      }
    }

    private onInput(event:Event):void {
      this.dispatchEvent(new tevents.Event('textChange'));
    }

  }

}