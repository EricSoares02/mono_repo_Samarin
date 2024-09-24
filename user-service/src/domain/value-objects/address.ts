type AddressType = {
    city: string,
    state: string,
    country: string
  }
  
 export class Address{
  
    constructor(
      protected city: string,
      protected state: string,
      protected country: string,
    ){}
  
    setAddress(): void{

    }
    getAddress(): AddressType{
      return {
        city: this.city,
        state: this.state,
        country: this.country,
      }
    }
  
  }
  