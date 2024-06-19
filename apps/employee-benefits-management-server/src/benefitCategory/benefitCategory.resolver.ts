import * as graphql from "@nestjs/graphql";
import { BenefitCategoryResolverBase } from "./base/benefitCategory.resolver.base";
import { BenefitCategory } from "./base/BenefitCategory";
import { BenefitCategoryService } from "./benefitCategory.service";

@graphql.Resolver(() => BenefitCategory)
export class BenefitCategoryResolver extends BenefitCategoryResolverBase {
  constructor(protected readonly service: BenefitCategoryService) {
    super(service);
  }
}
