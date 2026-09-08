import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Product } from './schemas/product.schema';
import { CreateProductDto } from './dto/create-product.dto';

export interface CreateProductResponse {
  message: string;
  product: Product;
}

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name)
    private readonly productModel: Model<Product>,
  ) {}

  async createProduct(dto: CreateProductDto): Promise<CreateProductResponse> {
    const product = await this.productModel.create({
      title: dto.title,
      tags: dto.tags,
    });

    return {
      message: 'Product created successfully',
      product,
    };
  }

  async findAll(): Promise<Product[]> {
    return this.productModel.find().exec();
  }
}
