import { InvalidEmailException } from "../exceptions/invalid-email.exception";


export class Email{

    protected emailAddress: string;

    constructor(email: string){
        if (!email) {
            throw new InvalidEmailException('Email is required');
          }
      
          if (!Email.isValid(email)) {
            throw new InvalidEmailException('Invalid Email');
          }
      
          this.emailAddress = email;
    }


    get full(): string {
        return this.emailAddress;
    }

    get domain(): string {
        return this.emailAddress.split('@')[1];
    }
    
    public static isValid(email): boolean {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
}