/// <reference path="../node/node.d.ts"/>
declare module "wkhtmltopdf" {

  function wkhtmltopdf(what:string, options?:{pageSize?:string; output?:string}):NodeJS.ReadableStream;
  function wkhtmltopdf(what:string, callback?:(code:number, signal:number)=>void):NodeJS.ReadableStream;

  export = wkhtmltopdf;
}