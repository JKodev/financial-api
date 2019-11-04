import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'apollo-server-express';
import { Category } from '../models/category';
import { CategoryService } from '../services/category.service';
import { CategoryInputDto } from '../dto/category.input.dto';

const pubSub = new PubSub();

@Resolver(of => Category)
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}

  @Query(returns => [Category])
  categories(): Promise<Category[]> {
    return this.categoryService.findAll();
  }

  @Mutation(returns => Category)
  async addCategory(
    @Args('newCategoryData')
    newCategoryData: CategoryInputDto): Promise<Category> {
    const category = await this.categoryService.create(newCategoryData);
    await pubSub.publish(
      'categoryAdded',
      { categoryAdded: category },
      );
    return category;
  }

  @Subscription(returns => Category)
  categoryAdded() {
    return pubSub.asyncIterator('categoryAdded');
  }
}
