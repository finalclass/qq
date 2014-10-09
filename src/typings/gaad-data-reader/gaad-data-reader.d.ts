declare module "gaad-data-reader" {

  export interface ISystem extends ISystemElement {
    volume:number;
    score:number;
  }

  export interface ILoadCapacity {
    prz1:number;
    prz2:number;
    prz3:number;
    prz4:number;
    prz5:number;
    prz6:number;
    el1:number;
    el2:number;
    el3:number;
    el4:number;
  }

  export interface IIBeamSection extends ISection {
    webWidth:number;
    webHeight:number;
    topFlangeWidth:number;
    topFlangeHeight:number;
    bottomFlangeWidth:number;
    bottomFlangeHeight:number;
  }

  export interface ISystemElement {
    id: string;
    type: string;
  }

  export interface ISection extends ISystemElement {
  }

  export interface INode extends ISystemElement {
  }

  export interface ILoad extends ISystemElement {
  }

  export interface IDimensioningSettings extends ISystemElement {
  }

  export interface IBar extends ISystemElement {
    loadCapacities:ILoadCapacity[];
  }

  export interface IAlgorithmSettings extends ISystemElement {
    penaltyPower:number;
    penaltyExponent:number;
    populationSize:number;
    numberOfRuns:number;
    iterations:number;
    mutationProbability:number;
    crossoverProbability:number;
    ntour:number;
  }

  export class GaadDataReader {
    private _data;
    private _byId;
    private _bars;
    private _sections;
    private _nodes;
    private _loads;
    private _system;
    private _algorithmSettings;
    private _dimensioningSettings;
    constructor(_data: ISystemElement[]);
    public bars : IBar[];
    public nodes : INode[];
    public sections : ISection[];
    public loads : ILoad[];
    public data : ISystemElement[];
    public algorithmSettings : IAlgorithmSettings;
    public dimensioningSettings : IDimensioningSettings;
    public system:ISystem;
    public clone(): GaadDataReader;
    public byId(id:string):ISystemElement;
  }
}


