import { Module } from "@nestjs/common";
import { BenefitCategoryModuleBase } from "./base/benefitCategory.module.base";
import { BenefitCategoryService } from "./benefitCategory.service";
import { BenefitCategoryController } from "./benefitCategory.controller";
import { BenefitCategoryResolver } from "./benefitCategory.resolver";

@Module({
  imports: [BenefitCategoryModuleBase],
  controllers: [BenefitCategoryController],
  providers: [BenefitCategoryService, BenefitCategoryResolver],
  exports: [BenefitCategoryService],
})
export class BenefitCategoryModule {}
