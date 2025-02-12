import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity({ tableName: 'categories' })
export class Category {
  @PrimaryKey({ autoincrement: true })
  id!: number;

  @Property()
  name!: string;
}
