import { Body, Controller, Get, Header, HttpCode, HttpRedirectResponse, Param, Post, Put, Query, Redirect, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { UserService } from './user/user.service';
import { Connection } from './connection/connection';
import { MailService } from './mail/mail.service';
import { UserRepository } from './user-repository/user-repository';
import { User } from '@prisma/client';

@Controller('/api/users')
export class UserController {
    constructor(
        private service: UserService,
        private connection: Connection,
        private mailService: MailService,
        private userRepository: UserRepository,
    ) { }

    @Get('/user/:id')
    async get(@Param("id") id: number): Promise<User> {
        return this.userRepository.getUserById(id)
    }

    @Post('/create')
    async createUser(
        @Body('first_name') firstName: string,
        @Body('last_name') lastName: string,
    ): Promise<User> {
        return this.userRepository.save(firstName, lastName)
    }

    @Put('/update/:id')
    async updateUser(
        @Param('id') id: number,
        @Body('first_name') firstName: string,
        @Body('last_name') lastName: string
    ) {
        return this.userRepository.updateUserById(id, firstName, lastName)
    }
}
