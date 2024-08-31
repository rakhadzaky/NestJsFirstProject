import { Injectable } from '@nestjs/common';

export class Connection {
    getName(): string {
        return null
    }
}

@Injectable()
export class PostgresConnection extends Connection {
    getName(): string {
        return 'Postgres'
    }
}