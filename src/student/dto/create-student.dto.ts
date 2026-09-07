/* eslint-disable prettier/prettier */
import { IsEmail, IsInt, IsNotEmpty, IsOptional, Min, Max } from 'class-validator';

export class CreateStudentDto {
    @IsNotEmpty({ message: 'Name is required' })
    name: string;

    @IsInt({ message: 'Age must be a number' })
    @Min(1, { message: 'Age must be at least 1' })
    @Max(100, { message: 'Age must be at most 100' })
    age: number;

    @IsOptional()
    @IsEmail({}, { message: 'Invalid email format' })
    email?: string;
}