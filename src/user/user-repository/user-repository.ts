import { Injectable } from '@nestjs/common';
import { Connection } from '../connection/connection';
import { PrismaService } from 'src/prisma/prisma/prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class UserRepository {
    constructor(private prismaService: PrismaService) {
        console.info('Create user repository')
    }

    save(firstName: string, lastName: string): Promise<User> {
        return this.prismaService.user.create({
            data: {
                first_name: firstName,
                last_name: lastName
            }
        })
    }

    getUserById(id: number): Promise<User> {
        return this.prismaService.user.findFirst({
            where: {
                id: Number(id)
            }
        })
    }

    updateUserById(id: number, firstName: string, lastName: string): Promise<User> {
        return this.prismaService.user.update({
            data: {
                first_name: firstName,
                last_name: lastName,
            },
            where: {
                id: Number(id)
            }
        })
    }
}
