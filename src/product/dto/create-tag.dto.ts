import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTagDto {
  @IsNotEmpty({ message: 'Tag name is required' })
  @IsString({ message: 'Tag name must be a string' })
  name: string;
}
