export default class Item {
  private _task : string;
  private _urgent : boolean;

  constructor(task: string, urgent: boolean){
    this._task = task;
    this._urgent = urgent;
  }

  get task(){
    return this._task;
  }
  get urgent(){
    return this._urgent;
  }

}