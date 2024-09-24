import { Email } from "../value-objects/email";
import { Address } from "../value-objects/address";
import { Tag } from "../value-objects/tag";
import { BirthDate } from "../value-objects/birth_date";

export enum SexualOrientation {
  'Gay',
  'Lesbian',
  'Pan',
  'Bi'
}

export class User{

    private constructor(
      private readonly id: string,
      private name: string,
      private surname: string,
      private birth_date: BirthDate,
      private user_tag: Tag,
      private email: Email,
      private password: string,
      private interest: string[],
      private sexual_orientation: SexualOrientation,
      private gender_indentity: string,
      private state: string,
      private address: Address,
      private createdAt: Date,
      private bio?: string,
      private profile_picture?: string,
      private updatedAt?: Date,
    ){
    }
  
  
    static create(
      id: string,
      name: string,
      surname: string,
      birth_date: BirthDate,
      user_tag: Tag,
      email: Email,
      password: string,
      interest: string[],
      sexual_orientation: SexualOrientation,
      gender_indentity: string,
      state: string,
      address: Address,
      createdAt: Date,
      bio?: string,
      profile_picture?: string,
      updatedAt?: Date,
    ){
      return new User(
        id,
        name,
        surname,
        birth_date,
        user_tag,
        email,
        password,
        interest,
        sexual_orientation,
        gender_indentity,
        state,
        address,
        createdAt,
        bio,
        profile_picture,
        updatedAt,
      )
    }

    get GetId(){
        return this.id
    }

    get GetName(){
      return this.name
    }
    get GetSurname(){
      return this.surname
    }
    get GetBirth_date(){
      return this.birth_date.GetbirthDate
    }
    get GetUser_tag(){
      return this.user_tag
    }
    get GetBio(){
      return this.bio
    }
    updateBio(bio: string){
      this.bio = bio
    }
    changePicture(picture: string){
      this.profile_picture = picture
    }
    get GetProfile_picture(){
      return this.profile_picture
    }
    get GetEmail(){
      return this.email
    }
    get GetPassword(){
      return this.password
    }
    get GetInterest(){
      return this.interest
    }
    changeSexualOrientation(sexual: SexualOrientation){
      this.sexual_orientation= sexual
    }
    get GetSexual_orientation(){
      return this.sexual_orientation
    }
    get GetGender_indentity(){
      return this.gender_indentity
    }
    get GetState(){
      return this.state
    }
    get GetCreatedAt(){
      return this.createdAt
    }
    get GetUpdatedAt(){
      return this.updatedAt
    }
    get GetAddress(){
      return this.address.getAddress()
    }
  }