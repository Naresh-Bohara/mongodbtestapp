import { IsNotEmpty, IsString } from 'class-validator';

export class CreateLibraryDto {
  @IsNotEmpty({ message: 'Library name is required!' })
  @IsString({ message: 'Library name must be a string' })
  name: string;

  @IsNotEmpty({ message: 'Library location is required' })
  @IsString({ message: 'Library location must be a string' })
  location: string;
}
