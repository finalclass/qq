/// <reference path="typings/tsd.d.ts"/>
/// <reference path="Container.ts"/>
/// <reference path="Component.ts"/>

module qq {

  export class HGroup extends Container {

    constructor() {
      super();
      this.html.style.display = 'flex';
    }

  }

}