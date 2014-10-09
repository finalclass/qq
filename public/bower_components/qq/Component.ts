/// <reference path="typings/tsd.d.ts"/>
/// <reference path="Container.ts"/>

module qq {
  export class Component extends tevents.Dispatcher {

    constructor() {
      super();
      this._html = document.createElement('div');
    }

    // -------------------------
    // html
    // -------------------------
    private _html:HTMLDivElement;

    public get html() : HTMLDivElement {
      return this._html;
    }

    // -------------------------
    // parent
    // -------------------------
    private _parent:Container;

    public get parent() : Container {
      return this._parent;
    }

    public set parent(parent:Container) {
      this._parent = parent;
      if (parent) {
        this.dispatchEvent(new tevents.Event('added'));
      } else {
        this.dispatchEvent(new tevents.Event('removed'));
      }
    }

    // -------------------------
    // widthPercent
    // -------------------------
    private _widthPercent:number;

    public get widthPercent() : number {
      return this._widthPercent;
    }

    public set widthPercent(widthPercent:number) {
      this._widthPercent = widthPercent;
      this.html.style.width = widthPercent + '%';
      this.dispatchEvent(new tevents.Event('widthChange'));
    }

    // -------------------------
    // width
    // -------------------------
    private _width:number;

    public get width() : number {
      return this._width;
    }

    public set width(width:number) {
      this._width = width;
      this.html.style.width = width + 'px';
      this.dispatchEvent(new tevents.Event('widthChange'));
    }

  }
}