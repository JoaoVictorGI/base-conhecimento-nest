import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class Category {
  @PrimaryKey({ autoincrement: true })
  id!: number;

  @Property()
  name!: string;
}
