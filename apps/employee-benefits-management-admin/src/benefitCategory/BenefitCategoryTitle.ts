import { BenefitCategory as TBenefitCategory } from "../api/benefitCategory/BenefitCategory";

export const BENEFITCATEGORY_TITLE_FIELD = "id";

export const BenefitCategoryTitle = (record: TBenefitCategory): string => {
  return record.id?.toString() || String(record.id);
};
