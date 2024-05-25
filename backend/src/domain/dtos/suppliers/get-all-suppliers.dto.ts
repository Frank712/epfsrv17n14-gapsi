import { CustomError } from "../../errors/custom.error";
export class GetAllSuppliersDto {
  private constructor(public page: number, public limit: number) {}

  static create(object: {
    [key: string]: any;
  }): [string?, GetAllSuppliersDto?] {
    let { page = 1, limit = 10 } = object;
    if (typeof page === "string") {
      page = parseInt(page);
      if (isNaN(page)) {
        page = 1;
      }
    }
    if (typeof limit === "string") {
      limit = parseInt(limit);
      if (isNaN(limit)) {
        limit = 10;
      }
    }
    return [, new GetAllSuppliersDto(page, limit)];
  }
}
