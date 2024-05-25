import { SupplierEntity } from "../entities/supplier.entity";
import { CreateSupplierDto } from "../dtos/suppliers/create-supplier.dto";
import { DeleteSupplierDto } from "../dtos/suppliers/delete-supplier.dto";

export abstract class SupplierDatasource {
  abstract getAllSuppliers(): Promise<SupplierEntity[]>;
  abstract createSupplier(
    createSupplierDto: CreateSupplierDto
  ): Promise<SupplierEntity>;
  abstract deleteSupplier(
    deleteSupplierDto: DeleteSupplierDto
  ): Promise<SupplierEntity>;
}
