import { User } from "src/domain/entities/user.entity";
import { Address } from "src/domain/value-objects/address";
import { BirthDate } from "src/domain/value-objects/birth_date";
import { Email } from "src/domain/value-objects/email";
import { Tag } from "src/domain/value-objects/tag";


export class UserMapper{



    static toDomain(raw: any){

        return User.create(
            raw.id,
            raw.name,
            raw.surname,
            new BirthDate(raw.birth_date),
            new Tag(raw.user_tag),
            new Email(raw.email),
            raw.password,
            raw.interest,
            raw.sexual_orientation,
            raw.gender_indentity,
            raw.state,
            new Address(raw.address.city, raw.address.state, raw.address.country),
            raw.bio,
            raw.profile_picture,
            raw.createdAt,
            raw.updatedAt,
        );

    }

    static toArrayDomain(raw: any[]): User[]{
        const users = []
        for (let index = 0; index < raw.length; index++) {
            users.push(UserMapper.toDomain(raw[index]))
        }
        return users
    }

    static build(user: User){

        return {
            id: user.GetId,
            name: user.GetName,
            surname: user.GetSurname,
            birth_date: user.GetBirth_date,
            user_tag: user.GetUser_tag.full,
            email: user.GetEmail.full,
            password: user.GetPassword,
            interest: user.GetInterest,
            sexual_orientation: user.GetSexual_orientation.toString(),
            gender_indentity: user.GetGender_indentity,
            state: user.GetState,
            address: user.GetAddress,
            createdAt: user.GetCreatedAt,
            bio: user.GetBio,
            profile_picture: user.GetProfile_picture,
            updatedAt: user.GetUpdatedAt,
        }
    }
}