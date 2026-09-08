// dto/create-employee.dto.ts

import { Type } from 'class-transformer';
import { IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { CreateProfileDto } from './create-profile.dto';

export class CreateEmployeeDto {
  @IsNotEmpty({ message: 'Name is required' })
  @IsString({ message: 'Name must be a string' })
  name: string;

  @IsNotEmpty({ message: 'Profile is required' })
  @ValidateNested()
  @Type(() => CreateProfileDto)
  profile: CreateProfileDto;
}
