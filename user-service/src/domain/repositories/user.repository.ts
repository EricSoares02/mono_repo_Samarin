import { Prisma } from "@prisma/client";
import { User } from "src/domain/entities/user.entity";

export type getUserparams = {
    skip?: number;
    take?: number;
    cursor?: Prisma.UsersWhereUniqueInput;
    where?: Prisma.UsersWhereInput;
    orderBy?: Prisma.UsersOrderByWithRelationInput;
}

export type UserWithoutPassword = Omit<User, "password">;

export default interface UserRepositoryInterface {

    register(user: User): Promise<string>
    getById(id: string): Promise<User | null>
    getByTagOrEmail(param: string): Promise<User | null>
    searchUsers(params: getUserparams):Promise<UserWithoutPassword[]>
    update(user: User): Promise<void>
}