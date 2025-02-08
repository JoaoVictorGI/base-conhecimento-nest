import { EntityRepository } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityManager } from '@mikro-orm/postgresql';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Category } from 'src/categories/entities/category.entity';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { Article } from './entities/article.entity';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectRepository(Article)
    private readonly articleRepository: EntityRepository<Article>,
    private readonly em: EntityManager,
  ) { }

  async createArticle(articleData: CreateArticleDto) {
    const category = await this.em.findOne(Category, {
      id: articleData.category,
    });
    if (!category) {
      throw new Error('Category not found');
    }

    const newArticle = this.articleRepository.create(
      {
        title: articleData.title,
        content: articleData.content,
        category,
      },
      { partial: true },
    );
    await this.em.persistAndFlush(newArticle);
    return newArticle;
  }

  async getArticles() {
    const articles = await this.articleRepository.findAll();

    if (articles.length === 0) {
      throw new NotFoundException('No articles found');
    }

    return articles;
  }

  async getArticleById(id: string) {
    const article = await this.articleRepository.findOne({ id });

    if (!article) {
      throw new NotFoundException(`Article with id ${id} not found`);
    }

    return article
  }

  async updateArticle(id: string, articleData: UpdateArticleDto) {
    const article = await this.getArticleById(id);

    if (!article) {
      throw new NotFoundException(`Article with id ${id} not found`);
    }

    article.title = articleData.title;
    article.content = articleData.content;
    article.category = articleData.category;

    await this.em.persistAndFlush(article);

    return article;
  }

  async removeArticle(id: string) {
    const article = await this.getArticleById(id);

    if (!article) {
      throw new NotFoundException(`Article with id ${id} not found`);
    }

    return this.em.removeAndFlush(article)
  }
}
