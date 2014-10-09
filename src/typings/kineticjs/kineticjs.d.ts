// Type definitions for KineticJS
// Project: http://kineticjs.com/
// Definitions by: Basarat Ali Syed <http://www.github.com/basarat>, Ralph de Ruijter <http://www.superdopey.nl/techblog/>, Szymon Wygnański <http://finalclass.net>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module Kinetic {

  export class Node {
    constructor(config:IObjectOptionsConfig);
    cache(cacheConfig?:any): Node;
    clone(attrs:any): Node;
    destroy(): void;
    draw(): Node;
    drawBuffer(): any;
    drawScene(): any;
    getAbsoluteOpacity(): number;
    getAbsolutePosition(): IVector2d;
    getAbsoluteTransform(): any;
    getAbsoluteZIndex(): number;
    getAttrs(): any;
    getDragBounds(): any;
    getDragConstraint(): any;
    getDraggable(): boolean;
    getLayer(): any;
    getLevel(): number;
    getListening(): any;
    getName(): string;
    getOffset(): IVector2d;
    getOpacity(): number;
    getParent(): any;
    getPosition(): IVector2d;
    getRotation(): number;
    getRotationDeg(): number;
    getScale(): IVector2d;
    getScaleX(): number;
    getScaleY(): number;
    getSize(): ISize;
    getStage(): Stage;
    getTransform(): any;
    getZIndex(): number;
    hide(): void;
    isDraggable(): boolean;
    isDragging(): boolean;
    isListening(): boolean;
    move(x:number, y:number): void;
    moveDown(): void;
    moveTo(newContainer:Container): void;
    moveToBottom(): void;
    moveToTop(): void;
    moveUp(): void;
    name(): string;
    name(name:string): void;
    rotate(theta:number): void;
    rotateDeg(deg:number): void;
    rotation(deg:number):void;

    // Events
    on(typesStr:string, handler:(data:any) => any): void;
    off(typesStr:string): void;
    fire(typeStr:string, event?:any, bubble?:boolean): any;

    setAbsolutePosition(pos:IVector2d): void;
    setAttrs(config:any): void;
    setDefaultAttrs(config:any): void;
    setDragBounds(bounds:any): void;

    setDragConstraint(constraint:string): void;
    setDraggable(draggable:boolean): void;
    setListening(listening:boolean): void;
    setOffset(offset:IVector2d): any;
    setOpacity(opacity:any): void;
    setPosition(position:IVector2d): void;
    setRotation(theta:number): void;
    setRotationDeg(rotDeg:number): void;
    setScale(scale:IVector2d): void;
    setScaleX(scale:number): void;
    setScaleY(scale:number): void;
    setSize(size:ISize): any;
    setZIndex(zIndex:number): void;
    show(): void;
    simulate(eventType:string): void;
    toDataURL(config:any): void;
    transitionTo(config:any): void;

    // Width / Height
    width(): number;
    width(width:number): void;
    getWidth(): any;
    setWidth(width:number): void;
    height(): number;
    height(height:number): void;
    getHeight(): any;
    setHeight(height:number): any;

    // id
    id(): string;
    id(id:string): void;
    getId(): string;
    setId(id:string): void;

    // Position
    x(): number;
    x(x:number): void;
    y(): number;
    y(y:number): void;
    getX(): number;
    setX(x:number): void;
    getY(): number;
    setY(y:number): void;
    position(pos:IVector2d) : void;
    position() : IVector2d;
  }

  export interface IBounds {
    x:number;
    y:number;
    width:number;
    height:number;
  }

  export class Context implements CanvasRenderingContext2D {
    clear(bounds?:IBounds):void;
    clearTrace():void;
    fillShape(shape:Shape):void;
    fillStrokeShape(shape:Shape):void;
    getCanvas():ICanvas;
    getTrace(relaxed:boolean):string;
    reset():void;
    strokeShape(shape:Shape):void;

    // -------------------------
    // CanvasRenderingContext2D
    // -------------------------
    miterLimit: number;
    font: string;
    globalCompositeOperation: string;
    msFillRule: string;
    lineCap: string;
    msImageSmoothingEnabled: boolean;
    lineDashOffset: number;
    shadowColor: string;
    lineJoin: string;
    shadowOffsetX: number;
    lineWidth: number;
    canvas: HTMLCanvasElement;
    strokeStyle: any;
    globalAlpha: number;
    shadowOffsetY: number;
    fillStyle: any;
    shadowBlur: number;
    textAlign: string;
    textBaseline: string;
    restore(): void;
    setTransform(m11: number, m12: number, m21: number, m22: number, dx: number, dy: number): void;
    save(): void;
    arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise?: boolean): void;
    measureText(text: string): TextMetrics;
    isPointInPath(x: number, y: number, fillRule?: string): boolean;
    quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void;
    putImageData(imagedata: ImageData, dx: number, dy: number, dirtyX?: number, dirtyY?: number, dirtyWidth?: number, dirtyHeight?: number): void;
    rotate(angle: number): void;
    fillText(text: string, x: number, y: number, maxWidth?: number): void;
    translate(x: number, y: number): void;
    scale(x: number, y: number): void;
    createRadialGradient(x0: number, y0: number, r0: number, x1: number, y1: number, r1: number): CanvasGradient;
    lineTo(x: number, y: number): void;
    getLineDash(): Array<number>;
    fill(fillRule?: string): void;
    createImageData(imageDataOrSw: any, sh?: number): ImageData;
    createPattern(image: HTMLElement, repetition: string): CanvasPattern;
    closePath(): void;
    rect(x: number, y: number, w: number, h: number): void;
    clip(fillRule?: string): void;
    clearRect(x: number, y: number, w: number, h: number): void;
    moveTo(x: number, y: number): void;
    getImageData(sx: number, sy: number, sw: number, sh: number): ImageData;
    fillRect(x: number, y: number, w: number, h: number): void;
    bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void;
    drawImage(image: HTMLElement, offsetX: number, offsetY: number, width?: number, height?: number, canvasOffsetX?: number, canvasOffsetY?: number, canvasImageWidth?: number, canvasImageHeight?: number): void;
    transform(m11: number, m12: number, m21: number, m22: number, dx: number, dy: number): void;
    stroke(): void;
    strokeRect(x: number, y: number, w: number, h: number): void;
    setLineDash(segments: Array<number>): void;
    strokeText(text: string, x: number, y: number, maxWidth?: number): void;
    beginPath(): void;
    arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): void;
    createLinearGradient(x0: number, y0: number, x1: number, y1: number): CanvasGradient;
  }

  export class Container extends Node {
    constructor(config:any);
    add(child:Node): any;
    clone(attrs:any): Container;
    destroyChildren(): Container;
    find(selector:string): any;
    get(selector:any): any;
    getChildren(): Node[];
    getIntersections(point:any): any;
    isAncestorOf(node:any): any;
    remove(child:any): any;
    removeChildren(): any;
  }

  export class Stage {
    constructor(config:IStageConfig);
    add(layer:Layer): any;
    clear(): any;
    getContainer(): HTMLElement;
    getDOM(): HTMLElement;
    getHeight(): number;
    getIntersection(pos:any): any;
    getMousePosition(evt?:Event): any;
    getPointerPosition(): IVector2d;
    getStage(): Stage;
    draw():void;
    getTouchPosition(evt?:Event): any;
    getUserPosition(evt?:Event): any;
    getWidth(): number;
    load(JSON:any): any;
    reset(): any;
    setHeight(height:number): any;
    setWidth(width:number): any;
    toDataURL(config:any): any;
    toImage(config:any, callback:() => any): any;
    toJSON(): any;
  }

  export class Layer extends Container {
    constructor(config?:ILayerConfig);
    afterDraw(handler:() => any): any;
    beforeDraw(handler:() => any): any;
    clear(): any;
    getCanvas(): ICanvas;
    getClearBeforeDraw(): any;
    getContext(): Context;
    remove(): any;
    setClearBeforeDraw(clearBeforeDraw:boolean): any;
    toDataURL(config:any): any;
  }

  export interface ICanvas {
    _canvas: HTMLCanvasElement;

    getPixelRatio(): number;

    height: number;
    setPixelRatio(pixelRatio:number): any;
    width: number;
  }

  interface IShapeConfig {
    fill?:string;
    fillRed?:number;
    fillGreen?:number;
    fillBlue?:number;
    fillAlpha?:number;
    fillPatternImage?:Image;
    fillPatternX?:number;
    fillPatternY?:number;
    fillPatternOffset?:IVector2d;
    fillPatternOffsetX?:number;
    fillPatternOffsetY?:number;
    fillPatternScale?:IVector2d;
    fillPatternScaleX?:number;
    fillPatternScaleY?:number;
    fillPatternRotation?:number;
    fillPatternRepeat?:string;
    fillLinearGradientStartPoint?:IVector2d;
    fillLinearGradientStartPointX?:number;
    fillLinearGradientStartPointY?:number;
    fillLinearGradientEndPoint?:IVector2d;
    fillLinearGradientEndPointX?:number;
    fillLinearGradientEndPointY?:number;
    fillLinearGradientColorStops?:string[];
    fillRadialGradientStartPoint?:IVector2d;
    fillRadialGradientStartPointX?:number;
    fillRadialGradientStartPointY?:number;
    fillRadialGradientEndPoint?:IVector2d;
    fillRadialGradientEndPointX?:number;
    fillRadialGradientEndPointY?:number;
    fillRadialGradientStartRadius?:number;
    fillRadialGradientEndRadius?:number;
    fillRadialGradientColorStops?:string[];
    fillEnabled?:boolean;
    fillPriority?:string;
    stroke?:string;
    strokeRed?:number;
    strokeGreen?:number;
    strokeBlue?:number;
    strokeAlpha?:number;
    strokeWidth?:number;
    strokeScaleEnabled?:boolean;
    strokeEnabled?:boolean;
    lineJoin?:string;
    lineCap?:string;
    shadowColor?:string;
    shadowRed?:number;
    shadowGreen?:number;
    shadowBlue?:number;
    shadowAlpha?:number;
    shadowBlur?:number;
    shadowOffset?:IVector2d;
    shadowOffsetX?:number;
    shadowOffsetY?:number;
    shadowOpacity?:number;
    shadowEnabled?:boolean;
    dash?:any[];
    dashEnabled?:boolean;
    x?:number;
    y?:number;
    width?:number;
    height?:number;
    visible?:boolean;
    listening?:boolean;
    id?:string;
    name?:string;
    opacity?:number;
    scale?:IVector2d;
    scaleX?:number;
    scaleY?:number;
    rotation?:number;
    offset?:IVector2d;
    offsetX?:number;
    offsetY?:number;
    draggable?:boolean;
    dragDistance?:number;
    dragBoundFunc?:()=>IVector2d;
    sceneFunc?: (context:Context)=>void;
  }

  export class Shape extends Node {
    constructor(config:IShapeConfig);
    sceneFunc: (context:Context)=>void;
    applyLineJoin(): void;
    drawImage(): void;
    fill(): void;
    fillText(text:string): void;
    getCanvas(): ICanvas;
    getContext(): Context;
    getDrawFunc(): any;
    getFill(): string;
    getLineJoin(): any;
    getShadow(): any;
    getStroke(): any;
    getStrokeWidth(): number;
    intersects(point:any): boolean;
    setDrawFunc(drawFunc:() => any): any;
    setFill(fill:string): any;
    setLineJoin(): any;
    setShadow(config:any): any;
    setSize(size:ISize): any;
    setStroke(stroke:string): any;
    setStrokeWidth(strokeWidth:number): any;
    stroke(): any;
    strokeText(text:string): any;
  }

  export class Rect extends Shape {
    constructor(config:IRectConfig);
    getCornerRadius(): number;
    getHeight(): number;
    getWidth(): number;
    setCornerRadius(radius:number): any;
    setHeight(height:number): any;
    setWidth(width:number): any;
  }

  export class Circle extends Shape {
    constructor(config:ICircleConfig);
    getRadius(): number;
    setRadius(radius:number): any;
  }

  export class Ellipse {
    constructor(config:ICircleConfig);
    getRadius(): number;
    setRadius(radius:number): any;
  }

  export class Group extends Container {
    constructor(config?:IObjectOptionsConfig);
  }

  export class Collection {
    apply(method:Function, val:any): any;
    each(func:() => any): any;
  }

  export class Image {
    constructor(config?:IImageConfig);
    applyFilter(config:any): any;
    clearImageBuffer(): any;
    createImageBuffer(callback:() => any): any;
    getCrop(): any;
    getFilter(): any;
    getHeight(): number;
    getImage(): Image;
    getWidth(): number;
    setCrop(config:ICropConfig): any;
    setFilter(config:any): any;
    setHeight(height:number): any;
    setImage(image:Image): any;
    setWidth(width:number): any;
  }

  export class Line extends Shape {
    constructor(config:ILineConfig);
    getDashArray(): any;
    getLineCap(): any;
    getPoints(): any;
    setDashArray(dashArray:any): any;
    setLineCap(lineCap:string): any;
    setPoints(can:any[]): any;
  }

  export class Path {
    constructor(config:IPathConfig);
    parsePathData(data:string): any;
    getData(): string;
    setData(SVG:string): any;
  }

  export class Polygon {
    constructor(config:IPolygonConfig);
    getPoints(): any;
    setPoints(points:any): any;
  }

  export class RegularPolygon extends Shape {
    constructor(config:IRegularPolygonConfig);
    getRadius(): number;
    getSides(): number;
    setRadius(radius:number): any;
    setSides(sides:number): any;
  }

  export class Sprite {
    constructor(config:ISpriteConfig);
    afterFrame(index:number, func:() => any): any;
    getAnimation(): string;
    getAnimations(): any;
    getIndex(): number;
    setAnimation(anim:string): any;
    setAnimations(animations:any): any;
    setIndex(index:number): any;
    start(): any;
    stop(): any;
  }

  export class Star {
    constructor(config:IStarConfig);
    getInnerRadius(): number;
    getNumPoints(): number;
    getOuterRadius(): number;
    setInnerRadius(radius:number): any;
    setNumPoints(points:number): any;
    setOuterRadius(radius:number): any;
  }

  export class Text extends Shape {
    constructor(config:ITextConfig);
    getAlign(): string;
    getBoxHeight(): number;
    getBoxWidth(): number;
    getFontFamily(): string;
    getFontSize(): number;
    getFontStyle(): string;
    getHeight(): number;
    getLineHeight(): number;
    getPadding(): number;
    getShadow(): any;
    getText(): string;
    getTextFill(): any;
    getTextHeight(): number;
    getTextStroke(): any;
    getTextStrokeWidth(): number;
    getTextWidth(): number;
    getWidth(): number;
    setAlign(align:string): any;
    setFontFamily(fontFamily:string): any;
    setFontSize(fontSize:number): any;
    setFontStroke(textStroke:any): any;
    setFontStyle(fontStyle:string): any;
    setHeight(height:number): any;
    setLineHeight(lineHeight:number): any;
    setPadding(padding:number): any;
    setShadow(config:any): any;
    setText(text:string): any;
    setTextFill(textFill:any): any;
    setTextStrokeWidth(textStrokeWidth:number): any;
    setWidth(width:number): any;
    text() : string;
    text(text:string) : Text;
  }

  export class TextPath {
    constructor(config:any);
    getFontFamily(): string;
    getFontSize(): number;
    getFontStyle(): string;
    getText(): string;
    getTextFill(): any;
    getTextHeight(): number;
    getTextStroke(): any;
    getTextStrokeWidth(): number;
    getTextWidth(): number;
    setFontFamily(fontFamily:string): any;
    setFontSize(fontSize:number): any;
    setFontStroke(textStroke:any): any;
    setFontStyle(fontStyle:string): any;
    setText(text:string): any;
    setTextFill(textFill:any): any;
    setTextStrokeWidth(textStrokeWidth:number): any;
  }

  export class Transition {
    constructor(node:Node, config:any);
    start(): any;
    stop(): any;
  }

  export class Animation {
    constructor(...args:any[]);
    start(): any;
    stop(): any;
  }

  export interface ICropConfig {
    x: number;
    y: number;
    width: number;
    height: number;
  }

  export interface IStageConfig extends IObjectOptionsConfig {
    container: any;
    width: number;
    height: number;
  }

  export interface ILayerConfig extends IObjectOptionsConfig {
    clearBeforeDraw?: boolean;
  }

  //shape configs class
  export interface IRectConfig extends IDrawOptionsConfig, IObjectOptionsConfig {
    width?: number;
    height?: number;
    cornerRadius?: number;
  }

  export interface ICircleConfig extends IDrawOptionsConfig, IObjectOptionsConfig {
    radius: number;
  }

  export interface IImageConfig extends IDrawOptionsConfig, IObjectOptionsConfig {
    image: any;
    width?: number;
    height?: number;
    crop?: any;
  }

  export interface ISpriteConfig extends IDrawOptionsConfig, IObjectOptionsConfig {
    image: any;
    animations?: any;
    animation?: any;
    frameRate?: number;
  }

  export interface ITextConfig extends IDrawOptionsConfig, IObjectOptionsConfig {
    text: string;
    fontSize?: number;
    fontFamily?: string;
    fontStyle?: string;
    textFill?: any;
    textStroke?: any;
    textStrokeWidth?: number;
    align?: string;
    padding?: number;
    width?: number;
    height?: number;
    lineHeight?: number;
    cornerRadius?: number;
  }

  export interface ILineConfig extends IDrawOptionsConfig, IObjectOptionsConfig {
    points: any;
    lineCap?: string;
    dashArray?: any;
  }

  export interface IPolygonConfig extends IDrawOptionsConfig, IObjectOptionsConfig {
    points: any;
  }

  export interface IRegularPolygonConfig extends IDrawOptionsConfig, IObjectOptionsConfig {
    sides: number;
    radius: number;
  }

  export interface IPathConfig extends IDrawOptionsConfig, IObjectOptionsConfig {
    data: string;
  }

  export interface IStarConfig extends IDrawOptionsConfig, IObjectOptionsConfig {
    numPoints: number;
    outerRadius: number;
    innerRadius: number;
  }

  export interface ICustomConfig extends IDrawOptionsConfig, IObjectOptionsConfig {
    drawFunc: () => any;
  }

  export interface IDrawOptionsConfig {
    fill?: string;
    stroke?: string;
    strokeWidth?: number;
    lineJoin?: string;
    shadow?: any;
  }

  export interface IVector2d {
    x: number;
    y: number;
  }

  export interface IObjectOptionsConfig {
    x?: number;
    y?: number;
    visible?: boolean;
    listening?: boolean;
    id?: string;
    name?: string;
    opacity?: any;
    scale?: IVector2d;
    rotation?: number;
    rotationDeg?: number;
    offset?: IVector2d;
    draggable?: boolean;
    dragConstraint?:string;
    dragBounds?: any;
    dragBoundFunc?: (pos:IVector2d) => IVector2d;
    width?: number;
    height?: number;
  }

  export interface ISize {
    width: number;
    height: number;
  }
}
