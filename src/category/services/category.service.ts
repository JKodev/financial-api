import { InjectRepository } from '@nestjs/typeorm';
import { CategoryEntity } from '../entities/category.entity';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { CategoryInputDto } from '../dto/category.input.dto';
import { Category } from '../models/category';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoryEntity)
    private readonly categoryRepository: Repository<CategoryEntity>,
  ) {}

  create(data: CategoryInputDto): Promise<Category> {
    const category = new CategoryEntity();
    category.slug = data.slug;
    category.name = data.name;
    return this.categoryRepository.save(category);
  }

  findAll(): Promise<Category[]> {
    return this.categoryRepository.find();
  }
}
