/// <reference path="../node/node.d.ts"/>

interface IWebShotSize {
  width:number;
  height:number;
}

declare enum WebShotSizeDefinition {
  window,
  all
}

interface IWebShotDefinition {
  width:WebShotSizeDefinition;
  height:WebShotSizeDefinition;
}

interface IShotOffset {
  left:number;
  right:number;
  top:number;
  bottom:number;
}

declare enum WebShotStreamType {
  png,
  jpg,
  jpeg
}

declare enum WebShotSiteType {
  url,
  file,
  html
}

interface IWebShotOptions {
  windowSize?:IWebShotSize;
  shotSize?:IWebShotDefinition;
  shotOffset?:IShotOffset;
  phantomPath?:string;
  phantomConfig?:any;
  customHeaders?:any;
  defaultWhiteBackground?:boolean;
  customCSS?:string;
  quality?:number;
  streamType?:WebShotStreamType;
  siteType?:WebShotSiteType;
  renderDelay?:number;
  timeout?:number;
  takeShotOnCallback?:boolean;
  errorIfStatusIsNot200?:boolean;
}

declare module "webshot" {
  function webshot(input:string, outputFile:string, onComplete:(err?:Error)=>void):void;

  function webshot(
    input:string,
    onComplete:(err:Error, renderStream:NodeJS.ReadableStream)=>void):void;

  function webshot(
    input:string,
    options:IWebShotOptions,
    onComplete:(err:Error, renderStream:NodeJS.ReadableStream)=>void):void;

  function webshot(
    input:string,
    outputFile:string,
    options:IWebShotOptions,
    onComplete:(err:Error, renderStream:NodeJS.ReadableStream)=>void):void;

  export = webshot;
}