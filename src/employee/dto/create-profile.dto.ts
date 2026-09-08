// dto/create-profile.dto.ts

import { IsInt, IsNotEmpty, IsString, Min } from 'class-validator';

export class CreateProfileDto {
  @IsNotEmpty({ message: 'Age is required' })
  @IsInt({ message: 'Age must be an integer' })
  @Min(1, { message: 'Age must be greater than 0' })
  age: number;

  @IsNotEmpty({ message: 'Qualification is required' })
  @IsString({ message: 'Qualification must be a string' })
  qualification: string;
}
