import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { LibraryService } from './library.service';
import { CreateLibraryDto } from './dto/create-library.dto';
import { CreateBookDto } from './dto/create-book.dto';

@Controller('libraries')
export class LibraryController {
  constructor(private readonly libService: LibraryService) {}

  @Post()
  createLibrary(@Body() dto: CreateLibraryDto) {
    return this.libService.createLibrary(dto);
  }

  @Post(':lid/books')
  addBookToLibrary(@Param('lid') lid: string, @Body() dto: CreateBookDto) {
    return this.libService.addBookToLibrary(lid, dto);
  }

  @Get()
  findAllLibraries() {
    return this.libService.findAllLibraries();
  }

  @Get(':lid')
  findLibraryById(@Param('lid') lid: string) {
    return this.libService.findLibraryById(lid);
  }
}
