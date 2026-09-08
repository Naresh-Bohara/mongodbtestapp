/* eslint-disable prettier/prettier */
// employee.controller.ts

import { Body, Controller, Get, Post } from '@nestjs/common';

import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';

@Controller('employees')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post()
  createEmployee(@Body() dto: CreateEmployeeDto) {
    return this.employeeService.createEmployee(dto);
  }

  @Get()
  getAllEmployees() {
    return this.employeeService.findAll();
  }
}
