import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BenefitCategoryServiceBase } from "./base/benefitCategory.service.base";

@Injectable()
export class BenefitCategoryService extends BenefitCategoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
