import { BenefitCategoryWhereInput } from "./BenefitCategoryWhereInput";
import { BenefitCategoryOrderByInput } from "./BenefitCategoryOrderByInput";

export type BenefitCategoryFindManyArgs = {
  where?: BenefitCategoryWhereInput;
  orderBy?: Array<BenefitCategoryOrderByInput>;
  skip?: number;
  take?: number;
};
