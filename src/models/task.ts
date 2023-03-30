export class Task {
  private _subject : string;
  private _urgent : boolean;

  public constructor(subject: string, urgent : boolean=false){
    this._subject = subject;
    this._urgent = urgent;
  }

  public get subject(){
    return this._subject
  }

  public get urgent(){
    return this._urgent;
  }

}