import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user/user.service';
import { Connection, PostgresConnection } from './connection/connection';
import { mailService, MailService } from './mail/mail.service';
import { UserRepository } from './user-repository/user-repository';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
    imports: [PrismaModule],
    controllers: [UserController],
    providers: [UserService,
        {
            provide: Connection,
            useClass: PostgresConnection,
        },
        {
            provide: MailService,
            useValue: mailService,
        },
        UserRepository
    ]
})
export class UserModule { }
