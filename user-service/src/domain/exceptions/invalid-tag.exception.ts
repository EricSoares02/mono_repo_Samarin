
export class InvalidTagException extends Error{

    constructor(message?: string){
        super(message);
        this.name='insvalidTag';
    }
}