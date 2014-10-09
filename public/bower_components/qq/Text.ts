/// <reference path="typings/tsd.d.ts"/>
/// <reference path="Component.ts"/>

module qq {

  export class Text extends Component {

    constructor() {
      super();
    }

    public set text(text:string) {
      this.html.textContent = text;
      this.dispatchEvent(new tevents.Event('textChange'));
    }

    public get text() : string {
      return this.html.textContent;
    }
  }

}