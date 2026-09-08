import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Tag } from './tag.schema';

@Schema()
export class Product extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({
    type: [Tag],
    required: true,
  })
  tags: Tag[];s
}

export const ProductSchema = SchemaFactory.createForClass(Product);
