import { SupplierEntity } from "../../entities/supplier.entity";
import { DeleteSupplierDto } from "../../dtos/suppliers/delete-supplier.dto";
import { SupplierRepository } from "../../repositories/supplier.repository";

interface DeleteSupplierUseCase {
  execute(deleteSupplierDto: DeleteSupplierDto): Promise<SupplierEntity>;
}

export class CreateSupplier implements DeleteSupplierUseCase {
  constructor(private supplierRepository: SupplierRepository) {}

  execute(deleteSupplierDto: DeleteSupplierDto): Promise<SupplierEntity> {
    //: TODO validate if exists
    return this.supplierRepository.deleteSupplier(deleteSupplierDto);
  }
}
