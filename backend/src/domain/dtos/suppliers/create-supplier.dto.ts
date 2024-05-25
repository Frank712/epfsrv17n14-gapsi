export class CreateSupplierDto {
  private constructor(
    public nombre: string,
    public razonSocial: string,
    public direccion: string
  ) {}

  static create(object: { [key: string]: any }): [string?, CreateSupplierDto?] {
    const { nombre, razonSocial, direccion } = object;
    if (!nombre) return ["El nombre es requerido"];
    if (!razonSocial) return ["La razon social es requerida"];
    return [, new CreateSupplierDto(nombre, razonSocial, direccion)];
  }
}
