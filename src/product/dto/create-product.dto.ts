import { Type } from 'class-transformer';
import { IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { CreateTagDto } from './create-tag.dto';

export class CreateProductDto {
  @IsNotEmpty({ message: 'Product title is required' })
  @IsString({ message: 'Product title must be a string' })
  title: string;

  @IsNotEmpty({ message: 'Tags are required' })
  @ValidateNested({ each: true })
  @Type(() => CreateTagDto)
  tags: CreateTagDto[];
}
