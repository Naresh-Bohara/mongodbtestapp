/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable prettier/prettier */

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Student, StudentDocument } from './student.schema';
import { Model } from 'mongoose';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { DeleteStudentResponseDto } from './dto/delete-student-response.dto';

@Injectable()
export class StudentService {
  constructor(
    @InjectModel(Student.name)
    private readonly studentModel: Model<StudentDocument>,
  ) {}

  // CREATE
  async createStudent(data: CreateStudentDto): Promise<StudentDocument> {
    const newStudent = new this.studentModel(data);
    return newStudent.save();
  }

  // GET ALL
  async getAllStudents(): Promise<StudentDocument[]> {
    return this.studentModel.find().exec();
  }

  // GET BY ID
  async getStudentById(id: string): Promise<StudentDocument | null> {
    return this.studentModel.findById(id).exec();
  }

  // PUT - Replace entire student
  async replaceStudent(
    id: string,
    data: CreateStudentDto,
  ): Promise<StudentDocument> {
    const student = await this.studentModel
      .findOneAndReplace({ _id: id }, data, {
        returnDocument: 'after',
        runValidators: true,
      })
      .exec();

    if (!student) {
      throw new NotFoundException('Student not found');
    }

    return student;
  }

  // PATCH - Update only provided fields
  async updateStudent(
    id: string,
    data: UpdateStudentDto,
  ): Promise<StudentDocument> {
    const student = await this.studentModel
      .findByIdAndUpdate(id, data, { returnDocument: 'after', runValidators: true })
      .exec();

    if (!student) {
     throw new NotFoundException('Student not found');
    }

    return student;
  }


 async deleteStudent(id: string): Promise<DeleteStudentResponseDto> {
  const student = await this.studentModel.findByIdAndDelete(id).exec();

  if (!student) {
    throw new NotFoundException('Student not found!');
  }

  return {
    message: 'Student deleted successfully!',
    student,
  };
}
}
