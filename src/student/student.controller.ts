/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { StudentService } from './student.service';
import { Student } from './student.schema';
import { CreateStudentDto } from './dto/create-student.dto';

@Controller('student')
export class StudentController {
    constructor(private readonly studentService:StudentService){}

    @Post()
    async addStudent(@Body() data:CreateStudentDto){
        return this.studentService.createStudent(data)
    }
}
