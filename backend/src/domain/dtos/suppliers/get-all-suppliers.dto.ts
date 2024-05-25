export class GetAllSuppliersDto {
  private constructor(public page: number, public limit: number) {}

  static create(object: {
    [key: string]: any;
  }): [string?, GetAllSuppliersDto?] {
    const { page = 1, limit = 20 } = object;
    return [, new GetAllSuppliersDto(page, limit)];
  }
}
