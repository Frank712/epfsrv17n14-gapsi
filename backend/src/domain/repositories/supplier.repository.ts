import { SupplierEntity } from "../entities/supplier.entity";
import { CreateSupplierDto } from "../dtos/suppliers/create-supplier.dto";
import { DeleteSupplierDto } from "../dtos/suppliers/delete-supplier.dto";
import { GetAllSuppliersDto } from "../dtos/suppliers/get-all-suppliers.dto";

export abstract class SupplierRepository {
  abstract getAllSuppliers(
    getAllSupplierDto: GetAllSuppliersDto
  ): Promise<SupplierEntity[]>;
  abstract createSupplier(
    createSupplierDto: CreateSupplierDto
  ): Promise<SupplierEntity>;
  abstract deleteSupplier(
    deleteSupplierDto: DeleteSupplierDto
  ): Promise<SupplierEntity>;
}
