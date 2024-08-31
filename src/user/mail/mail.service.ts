import { Injectable } from '@nestjs/common';

@Injectable()
export class MailService {
    send() {
        console.log('send email')
    }
}

export const mailService = new MailService()
