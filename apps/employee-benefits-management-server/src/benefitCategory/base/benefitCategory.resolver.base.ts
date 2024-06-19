/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { BenefitCategory } from "./BenefitCategory";
import { BenefitCategoryCountArgs } from "./BenefitCategoryCountArgs";
import { BenefitCategoryFindManyArgs } from "./BenefitCategoryFindManyArgs";
import { BenefitCategoryFindUniqueArgs } from "./BenefitCategoryFindUniqueArgs";
import { DeleteBenefitCategoryArgs } from "./DeleteBenefitCategoryArgs";
import { BenefitCategoryService } from "../benefitCategory.service";
@graphql.Resolver(() => BenefitCategory)
export class BenefitCategoryResolverBase {
  constructor(protected readonly service: BenefitCategoryService) {}

  async _benefitCategoriesMeta(
    @graphql.Args() args: BenefitCategoryCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [BenefitCategory])
  async benefitCategories(
    @graphql.Args() args: BenefitCategoryFindManyArgs
  ): Promise<BenefitCategory[]> {
    return this.service.benefitCategories(args);
  }

  @graphql.Query(() => BenefitCategory, { nullable: true })
  async benefitCategory(
    @graphql.Args() args: BenefitCategoryFindUniqueArgs
  ): Promise<BenefitCategory | null> {
    const result = await this.service.benefitCategory(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => BenefitCategory)
  async deleteBenefitCategory(
    @graphql.Args() args: DeleteBenefitCategoryArgs
  ): Promise<BenefitCategory | null> {
    try {
      return await this.service.deleteBenefitCategory(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}