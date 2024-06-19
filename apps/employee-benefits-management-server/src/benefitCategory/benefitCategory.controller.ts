import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BenefitCategoryService } from "./benefitCategory.service";
import { BenefitCategoryControllerBase } from "./base/benefitCategory.controller.base";

@swagger.ApiTags("benefitCategories")
@common.Controller("benefitCategories")
export class BenefitCategoryController extends BenefitCategoryControllerBase {
  constructor(protected readonly service: BenefitCategoryService) {
    super(service);
  }
}
