export class DeleteSupplierDto {
  private constructor(public id: string) {}

  static create(object: { [key: string]: any }): [string?, DeleteSupplierDto?] {
    const { id } = object;
    if (!id) return ["El id es requerido"];
    return [, new DeleteSupplierDto(id)];
  }
}
