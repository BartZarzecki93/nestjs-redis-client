import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { User } from './entitites/user.entity';
import { UserService } from './user.service';

@Controller('users')
export class UserController {

    constructor(private readonly userService: UserService) { }

    @Get()
    async getHello(): Promise<any> {
        return this.userService.getHello()
    }

    @Post('add')
    async post(@Body('data') data: CreateUserInput): Promise<CreateUserInput> {
        return this.userService.post(data)
    }
}