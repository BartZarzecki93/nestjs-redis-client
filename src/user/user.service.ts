import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';
import { User } from './entitites/user.entity';


@Injectable()
export class UserService {

    private client: ClientProxy;

    constructor() {
        this.client = ClientProxyFactory.create({
            transport: Transport.REDIS,
            options: {
                url: 'redis://localhost:6379',
            }
        });
    }

    public getHello() {
        return this.client.send<string, string>('get', 'Michael').toPromise();
    }
    public post(data: CreateUserInput) {
        return this.client.send<CreateUserInput, CreateUserInput>('add', data).toPromise();
    }
}
