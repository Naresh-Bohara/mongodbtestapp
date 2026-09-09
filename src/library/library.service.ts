import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Library } from './schemas/library.schema';
import { Model } from 'mongoose';
import { Book } from './schemas/book.schema';
import { CreateLibraryDto } from './dto/create-library.dto';
import { CreateLibraryResponse } from './schemas/interfaces/create-library-response.interface';
import { CreateBookDto } from './dto/create-book.dto';
import { CreateBookResponse } from './schemas/interfaces/create-book-response.interface';

@Injectable()
export class LibraryService {
  constructor(
    @InjectModel(Library.name) private readonly libraryModel: Model<Library>,
    @InjectModel(Book.name) private readonly bookModel: Model<Book>,
  ) {}

  async createLibrary(dto: CreateLibraryDto): Promise<CreateLibraryResponse> {
    const library = await this.libraryModel.create({
      name: dto.name,
      location: dto.location,
      books: [],
    });

    return {
      message: 'Library created successfully!',
      library,
    };
  }

  async addBookToLibrary(
    lid: string,
    dto: CreateBookDto,
  ): Promise<CreateBookResponse> {
    const library = await this.libraryModel.findById(lid);

    if (!library) {
      throw new NotFoundException('Library not found!');
    }

    const book = await this.bookModel.create(dto);
    library.books.push(book._id);
    await library.save();

    return {
      message: 'Book added to library successfully!',
      book,
    };
  }

  async findAllLibraries(): Promise<Library[]> {
    return this.libraryModel.find().populate('books').exec();
  }

  async findLibraryById(lid: string): Promise<Library> {
    const library = await this.libraryModel
      .findById(lid)
      .populate('books')
      .exec();

    if (!library) {
      throw new NotFoundException('Library not found');
    }

    return library;
  }
}
