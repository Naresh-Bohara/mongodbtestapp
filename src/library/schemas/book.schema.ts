/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Schema as mongooseSchema } from "mongoose";

@Schema({timestamps: true})
export class Book extends Document{
    @Prop({required: true, trim:true})
    title: string;

    @Prop({required: true, trim: true})
    author: string;

    @Prop({required: true, trim: true, unique: true})
    isbn: string

}

export const BookSchema = SchemaFactory.createForClass(Book);