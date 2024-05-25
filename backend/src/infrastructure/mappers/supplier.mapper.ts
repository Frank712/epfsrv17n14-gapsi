import { SupplierEntity } from "../../domain/entities/supplier.entity";
import { CustomError } from "../../domain/errors/custom.error";

export class SupplierMapper {
  static supplierEntityFromObject(object: {
    [key: string]: any;
  }): SupplierEntity {
    const { id, nombre, razonSocial, direccion } = object;
    if (!nombre) throw CustomError.badRequest("El nombre es requerido");
    if (!razonSocial)
      throw CustomError.badRequest("La razon social es requerida");
    if (!direccion) throw CustomError.badRequest("La direccion es requerida");
    return new SupplierEntity(id, nombre, razonSocial, direccion);
  }

  static supplierEntityFromRawData(object: {
    [key: string]: any;
  }): SupplierEntity {
    const { id, name, bussinesName, address } = object;
    console.log({ object });
    return new SupplierEntity(id, name, bussinesName, address);
  }

  static supplierEntityToObject(supplierEntity: SupplierEntity): {
    [key: string]: any;
  } {
    return {
      id: supplierEntity.id,
      name: supplierEntity.name,
      bussinesName: supplierEntity.bussinesName,
      address: supplierEntity.address,
    };
  }
}
