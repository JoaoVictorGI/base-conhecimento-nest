import { Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { Category } from '../../categories/entities/category.entity';

@Entity({ tableName: 'articles' })
export class Article {
  @PrimaryKey({ type: 'uuid', defaultRaw: 'gen_random_uuid()' })
  id: string;

  @Property()
  title!: string;

  @Property()
  content!: string;

  @ManyToOne()
  category!: Category;

  @Property()
  createdAt: Date = new Date();

  @Property({ onUpdate: () => new Date() })
  updatedAt: Date = new Date();
}
