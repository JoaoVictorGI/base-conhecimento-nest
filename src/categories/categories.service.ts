import { EntityRepository } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityManager } from '@mikro-orm/postgresql';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: EntityRepository<Category>,
    private readonly em: EntityManager,
  ) {}

  async createArticle(categoryData: CreateCategoryDto) {
    const newCategory = this.categoryRepository.create(categoryData);
    await this.em.persistAndFlush(newCategory);
    return newCategory;
  }

  async getCategories() {
    const categories = await this.categoryRepository.findAll();

    if (categories.length === 0) {
      throw new NotFoundException('No categories found');
    }

    return categories;
  }
}
