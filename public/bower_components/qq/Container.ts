/// <reference path="typings/tsd.d.ts"/>
/// <reference path="Component.ts"/>

module qq {

  export class Container extends Component {

    private _children:Component[];

    constructor() {
      super();
      this._children = [];
    }

    public addChild(child:Component) : void {
      this._children.push(child);
      this.html.appendChild(child.html);
    }

    public removeChild(child:Component) : void {
      var index:number = this._children.indexOf(child);
      if (index !== -1) {
        this._children.splice(index, 1);
        this.html.removeChild(child.html);
      } else {
        throw new Error(child + ' is not a child of ' + this);
      }
    }

    public get children() : Component[] {
      return this._children;
    }
  }


}