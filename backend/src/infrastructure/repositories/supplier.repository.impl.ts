import { CreateSupplierDto } from "../../domain/dtos/suppliers/create-supplier.dto";
import { DeleteSupplierDto } from "../../domain/dtos/suppliers/delete-supplier.dto";
import { GetAllSuppliersDto } from "../../domain/dtos/suppliers/get-all-suppliers.dto";
import { SupplierEntity } from "../../domain/entities/supplier.entity";
import { SupplierRepository } from "../../domain/repositories/supplier.repository";
import { SupplierDatasource } from "../../domain/datasources/supplier.datasource";

export class SupplierRepositoryImpl implements SupplierRepository {
  constructor(private readonly supplierDatasource: SupplierDatasource) {}

  getAllSuppliers(
    getAllSupplierDto: GetAllSuppliersDto
  ): Promise<SupplierEntity[]> {
    return this.supplierDatasource.getAllSuppliers(getAllSupplierDto);
  }
  createSupplier(
    createSupplierDto: CreateSupplierDto
  ): Promise<SupplierEntity> {
    return this.supplierDatasource.createSupplier(createSupplierDto);
  }
  deleteSupplier(
    deleteSupplierDto: DeleteSupplierDto
  ): Promise<SupplierEntity> {
    return this.supplierDatasource.deleteSupplier(deleteSupplierDto);
  }
}
