import { IsNotEmpty, IsString } from 'class-validator';

export class CreateBookDto {
  @IsNotEmpty({ message: 'Book title is required' })
  @IsString({ message: 'Book title must be a string' })
  title: string;

  @IsNotEmpty({ message: 'Author is required' })
  @IsString({ message: 'Author must be a string' })
  author: string;

  @IsNotEmpty({ message: 'ISBN is required' })
  @IsString({ message: 'ISBN must be a string' })
  isbn: string;
}
