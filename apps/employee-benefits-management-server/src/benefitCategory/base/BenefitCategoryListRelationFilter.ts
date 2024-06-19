/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BenefitCategoryWhereInput } from "./BenefitCategoryWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class BenefitCategoryListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => BenefitCategoryWhereInput,
  })
  @ValidateNested()
  @Type(() => BenefitCategoryWhereInput)
  @IsOptional()
  @Field(() => BenefitCategoryWhereInput, {
    nullable: true,
  })
  every?: BenefitCategoryWhereInput;

  @ApiProperty({
    required: false,
    type: () => BenefitCategoryWhereInput,
  })
  @ValidateNested()
  @Type(() => BenefitCategoryWhereInput)
  @IsOptional()
  @Field(() => BenefitCategoryWhereInput, {
    nullable: true,
  })
  some?: BenefitCategoryWhereInput;

  @ApiProperty({
    required: false,
    type: () => BenefitCategoryWhereInput,
  })
  @ValidateNested()
  @Type(() => BenefitCategoryWhereInput)
  @IsOptional()
  @Field(() => BenefitCategoryWhereInput, {
    nullable: true,
  })
  none?: BenefitCategoryWhereInput;
}
export { BenefitCategoryListRelationFilter as BenefitCategoryListRelationFilter };
