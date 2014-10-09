declare module "debug" {
  function debug(what:string):debug.ILogFunction;
  module debug {
    export interface ILogFunction {
      (msg:string, ...args:string[]):void;
    }
  }
  export = debug;
}