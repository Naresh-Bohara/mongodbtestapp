/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Student, StudentDocument } from './student.schema';
import { Model } from 'mongoose';

@Injectable()
export class StudentService {
    constructor(
        @InjectModel(Student.name) private readonly studentModel:Model<StudentDocument>
    ){}

    async createStudent(data:Partial<Student>):Promise<StudentDocument>{
        const newStudent = new this.studentModel(data);
        return newStudent.save();
    }
}
