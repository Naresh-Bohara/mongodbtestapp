/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Controller('student')
export class StudentController {
    constructor(private readonly studentService:StudentService){}

    @Post()
    async addStudent(@Body() data:CreateStudentDto){
        return this.studentService.createStudent(data)
    }

    @Get()
    async getAllStudents(){
        return this.studentService.getAllStudents();
    }

      @Get(':id')
    async getStudentById(@Param('id') id:string){
        return this.studentService.getStudentById(id);
    }

    @Put(':id')
    async replaceStudent(@Param('id') id: string, @Body() data: CreateStudentDto,) {
        return this.studentService.replaceStudent(id, data);
    }

    @Patch(':id')
    async updateStudent(@Param('id') id: string, @Body() data: UpdateStudentDto,) {
     return this.studentService.updateStudent(id, data);
    }

    @Delete(':id')
    async deleteStudent(@Param('id') id: string){{
        return this.studentService.deleteStudent(id);
    }}

}

