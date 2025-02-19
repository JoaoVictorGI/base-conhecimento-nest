import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import JwtAuthenticationGuard from 'src/authentication/jwt-authentication.guard';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Post()
  @UseGuards(JwtAuthenticationGuard)
  createArticle(@Body() createArticleDto: CreateArticleDto) {
    return this.articlesService.createArticle(createArticleDto);
  }

  @Get()
  @UseGuards(JwtAuthenticationGuard)
  getAllArticles() {
    return this.articlesService.getArticles();
  }

  @Get('search')
  @UseGuards(JwtAuthenticationGuard)
  getByTitleContentOrCategory(@Query('q') q: string) {
    return this.articlesService.getArticleByTitleContentOrCategory(q);
  }

  @Get('category/:categoryId')
  @UseGuards(JwtAuthenticationGuard)
  getArticleByCategory(@Param('categoryId') categoryId: number) {
    return this.articlesService.getArticlesByCategory(categoryId);
  }

  @Get(':id')
  @UseGuards(JwtAuthenticationGuard)
  getById(@Param('id') id: string) {
    return this.articlesService.getArticleById(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthenticationGuard)
  async updateArticle(
    @Param('id') id: string,
    @Body() updateArticleDto: UpdateArticleDto,
  ) {
    return this.articlesService.updateArticle(id, updateArticleDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthenticationGuard)
  removeArticle(@Param('id') id: string) {
    return this.articlesService.removeArticle(id);
  }
}
