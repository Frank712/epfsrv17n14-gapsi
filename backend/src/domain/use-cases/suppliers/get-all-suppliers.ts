import { SupplierEntity } from "../../entities/supplier.entity";
import { GetAllSuppliersDto } from "../../dtos/suppliers/get-all-suppliers.dto";
import { SupplierRepository } from "../../repositories/supplier.repository";

interface GetAllSuppliersUseCase {
  execute(getAllSuppliersDto: GetAllSuppliersDto): Promise<SupplierEntity[]>;
}

export class GetAllSuppliers implements GetAllSuppliersUseCase {
  constructor(private supplierRepository: SupplierRepository) {}

  execute(getAllSuppliersDto: GetAllSuppliersDto): Promise<SupplierEntity[]> {
    return this.supplierRepository.getAllSuppliers(getAllSuppliersDto);
  }
}
