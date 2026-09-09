/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as mongooseSchema } from 'mongoose';
import { Book } from './book.schema';

@Schema({ timestamps: true })
export class Library extends Document {
  @Prop({ required: true, trim: true })
  name: string;

  @Prop({ required: true, trim: true })
  location: string;

  @Prop({ type: mongooseSchema.Types.ObjectId, ref: Book.name, default: [] })
  books: Book[];
}

export const LibrarySchema = SchemaFactory.createForClass(Library);
