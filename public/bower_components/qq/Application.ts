/// <reference path="typings/tsd.d.ts"/>
/// <reference path="Container"/>

module qq {

  export class Application extends Container {

    private _domRoot:HTMLElement;

    constructor() {
      super();
    }

    public set domRoot(root:HTMLElement) {
      this._domRoot = root;
      this._domRoot.appendChild(this.html);
    }

    public get domRoot() : HTMLElement {
      return this._domRoot;
    }

  }

}
