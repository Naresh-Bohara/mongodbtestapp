/* eslint-disable prettier/prettier */
import { Controller, Get, Post } from '@nestjs/common';
import { EmployeeService } from './employee.service';

@Controller('employees')
export class EmployeeController {
    constructor(private readonly empService:EmployeeService){}

    @Post()
    create(){
        return this.empService.createEmployee();
    }

    @Get()
    getAll(){
        return this.empService.findAll();
    }
}
