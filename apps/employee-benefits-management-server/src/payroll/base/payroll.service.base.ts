/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Payroll as PrismaPayroll } from "@prisma/client";

export class PayrollServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.PayrollCountArgs, "select">): Promise<number> {
    return this.prisma.payroll.count(args);
  }

  async payrolls(args: Prisma.PayrollFindManyArgs): Promise<PrismaPayroll[]> {
    return this.prisma.payroll.findMany(args);
  }
  async payroll(
    args: Prisma.PayrollFindUniqueArgs
  ): Promise<PrismaPayroll | null> {
    return this.prisma.payroll.findUnique(args);
  }
  async createPayroll(args: Prisma.PayrollCreateArgs): Promise<PrismaPayroll> {
    return this.prisma.payroll.create(args);
  }
  async updatePayroll(args: Prisma.PayrollUpdateArgs): Promise<PrismaPayroll> {
    return this.prisma.payroll.update(args);
  }
  async deletePayroll(args: Prisma.PayrollDeleteArgs): Promise<PrismaPayroll> {
    return this.prisma.payroll.delete(args);
  }
}
