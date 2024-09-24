import { InsufficientAgeException } from "../exceptions/insufficient-age.exception";


export class BirthDate{

    protected birth_date: Date;

    constructor(birth_date: Date){
        /* Verificando se o usuário é maior de idade. 
        Users menores de Idade não tem acesso a plataforma. */
        if (!BirthDate.isAdult(birth_date)){
            throw new InsufficientAgeException('The User must be of legal age')           
        }

        this.birth_date = birth_date;
          
    }

    get GetbirthDate(){
        return this.birth_date;
    }

    public static isAdult(birthDate: Date): boolean{
        const today = new Date();
        const age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        const dayDiff = today.getDate() - birthDate.getDate();
  
        //Verifica se o mês e o dia já passaram no ano atual
        if (monthDiff > 0 || (monthDiff === 0 && dayDiff >= 0)) {
          return age >= 18;
        } else {
          return age - 1 >= 18;
        }
    }

}