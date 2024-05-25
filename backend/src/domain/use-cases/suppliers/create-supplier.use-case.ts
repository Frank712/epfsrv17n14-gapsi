import { SupplierEntity } from "../../entities/supplier.entity";
import { CreateSupplierDto } from "../../dtos/suppliers/create-supplier.dto";
import { SupplierRepository } from "../../repositories/supplier.repository";

interface CreateSupplierUseCase {
  execute(createSupplierDto: CreateSupplierDto): Promise<SupplierEntity>;
}

export class CreateSupplier implements CreateSupplierUseCase {
  constructor(private supplierRepository: SupplierRepository) {}

  execute(createSupplierDto: CreateSupplierDto): Promise<SupplierEntity> {
    //: TODO validate if exists
    return this.supplierRepository.createSupplier(createSupplierDto);
  }
}
