import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import JwtAuthenticationGuard from 'src/authentication/jwt-authentication.guard';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  @UseGuards(JwtAuthenticationGuard)
  createCategory(@Body() categoryData: CreateCategoryDto) {
    return this.categoriesService.createArticle(categoryData);
  }

  @Get()
  @UseGuards(JwtAuthenticationGuard)
  getCategories() {
    return this.categoriesService.getCategories();
  }
}
