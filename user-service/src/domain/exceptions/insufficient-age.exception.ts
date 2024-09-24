

export class InsufficientAgeException extends Error{

    constructor(message?: string){
        super(message);
        this.name='insufficientAge';
    }
}