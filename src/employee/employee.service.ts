// employee.service.ts

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Employee } from './schemas/employee.schema';
import { Profile } from './schemas/profile.schema';
import { CreateEmployeeDto } from './dto/create-employee.dto';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectModel(Employee.name)
    private readonly employeeModel: Model<Employee>,

    @InjectModel(Profile.name)
    private readonly profileModel: Model<Profile>,
  ) {}

  async createEmployee(dto: CreateEmployeeDto): Promise<{
    message: string;
    employee: Employee;
  }> {
    const profile = await this.profileModel.create(dto.profile);

    const employee = await this.employeeModel.create({
      name: dto.name,
      profile: profile._id,
    });

    return {
      message: 'Employee created successfully',
      employee,
    };
  }

  async findAll(): Promise<Employee[]> {
    return this.employeeModel.find().populate('profile').exec();
  }
}
