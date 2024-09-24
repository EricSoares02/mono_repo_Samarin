import { InvalidTagException } from "../exceptions/invalid-tag.exception";


export class Tag{

    protected userTag: string;

    constructor(tag: string){
        if (!tag) {
            throw new InvalidTagException('Tag is required');
          }
      
          if (! Tag.isValid(tag)) {
            throw new InvalidTagException('Tag is invalid');
          }
      
          this.userTag = tag;
    }


    get full(): string {
        return this.userTag;
    }

    get domain(): string {
        return this.userTag.split('@')[1];
    }
    
    public static isValid(tag: string): boolean {
        return /^@[a-zA-Z0-9_.]+$/.test(tag);
    }
     
}