/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Prop, SchemaFactory, Schema } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type StudentDocument = Student & Document;
@Schema({timestamps: true})
export class Student{
    @Prop({required: true})
    name: string;
    @Prop({required: true})
    age: number;
    @Prop()
    email?: string;
}

export const StudentSchema = SchemaFactory.createForClass(Student);