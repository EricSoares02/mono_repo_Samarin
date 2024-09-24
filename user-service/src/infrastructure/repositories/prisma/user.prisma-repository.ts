import { User } from "src/domain/entities/user.entity";
import UserRepositoryInterface, { UserWithoutPassword } from "src/domain/repositories/user.repository";
import { Prisma } from "@prisma/client";
import { PrismaService } from "../../persistence/database/database.connection";
import { UserMapper } from "src/infrastructure/mappers/user.mapper";
import { Injectable } from "@nestjs/common";



@Injectable()
export default class UserRepository implements UserRepositoryInterface{
    
 
    constructor(private database: PrismaService){}

    async register(user: User): Promise<string> {
        
        const raw = UserMapper.build(user);

        const {id} = await this.database.users.create({
            data: {
                ...raw,
                address: {
                    create: raw.address
                }
            }
        })

        return id
    }


    async getById(id: string): Promise<User | null> {
        const output = await this.database.users.findUnique({
            include: {
                address: true
            },
            where: {id},
        });
        return UserMapper.toDomain(output);
        
    }

    async getByTagOrEmail(param: string): Promise<User | null> {
        const output = await this.database.users.findFirst({
            include:{
                address:true
            },
            where:{
                OR:[
                    {
                        email: param
                    },
                    {
                        user_tag: param
                    }
                ]
            }
        });
        return UserMapper.toDomain(output);
    }

    async searchUsers(params: { skip?: number; take?: number; cursor?: Prisma.UsersWhereUniqueInput; where?: Prisma.UsersWhereInput; orderBy?: Prisma.UsersOrderByWithRelationInput; }): Promise<UserWithoutPassword[]> {
        const { skip, take, cursor, where, orderBy } = params;
        const output = await this.database.users.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
        });
      
        return UserMapper.toArrayDomain(output)

    }

    async update(user: User): Promise<void> {

        const raw = UserMapper.build(user);

        await this.database.users.update({
            where: {id: raw.id},
            data: {
                ...raw,
                address: {
                    create: raw.address
                }
            }
        })
    }
    
}