/* eslint-disable prettier/prettier */
import { Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService:UserService){}

    @Post()
    create(){
        return this.userService.createUser();
    }

    @Get()
    getUsers(){
        return this.userService.findAll()
    }
}
