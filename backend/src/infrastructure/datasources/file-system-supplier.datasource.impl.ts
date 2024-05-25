import fs from "fs";
import { v4 as uuidv4 } from "uuid";

import { SupplierDatasource } from "../../domain/datasources/supplier.datasource";
import { CreateSupplierDto } from "../../domain/dtos/suppliers/create-supplier.dto";
import { DeleteSupplierDto } from "../../domain/dtos/suppliers/delete-supplier.dto";
import { GetAllSuppliersDto } from "../../domain/dtos/suppliers/get-all-suppliers.dto";
import { SupplierEntity } from "../../domain/entities/supplier.entity";
import { SupplierMapper } from "../mappers/supplier.mapper";
import { CustomError } from "../../domain/errors/custom.error";

export class FileSystemSupplierDatasourceImpl implements SupplierDatasource {
  private readonly dbPath = "./db.json";
  private data: Array<any> = [];

  constructor() {
    this.readDb();
  }

  getAllSuppliers(
    getAllSupplierDto: GetAllSuppliersDto
  ): Promise<SupplierEntity[]> {
    this.readDb();
    const { page, limit } = getAllSupplierDto;
    const start = page * limit - limit;
    const end = start + limit;
    const rawData = this.data.slice(start, end);
    return Promise.resolve(rawData);
  }

  createSupplier(
    createSupplierDto: CreateSupplierDto
  ): Promise<SupplierEntity> {
    this.readDb();
    const supplier = this.getSupplierByName(createSupplierDto.nombre);
    if (supplier) {
      throw CustomError.badRequest(
        `El proovedor con el nombre ${createSupplierDto.nombre} ya existe`
      );
    }
    const id = uuidv4();
    const supplierRaw = { ...createSupplierDto, id };
    const newSupplier = SupplierMapper.supplierEntityFromObject(supplierRaw);
    const newSupplierPlain = SupplierMapper.supplierEntityToObject(newSupplier);
    this.data.push(newSupplierPlain);
    this.writeDB();
    return Promise.resolve(newSupplier);
  }

  deleteSupplier(
    deleteSupplierDto: DeleteSupplierDto
  ): Promise<SupplierEntity> {
    this.readDb();
    const supplier = this.getSupplierById(deleteSupplierDto.id);
    if (!supplier) {
      throw CustomError.badRequest(
        `El proovedor con el id ${deleteSupplierDto.id} no existe`
      );
    }
    this.deleteSupplierFromDB(supplier.id);
    this.writeDB();
    return Promise.resolve(supplier);
  }

  getSupplierById(id: string) {
    console.log({ id });
    const supplier = this.data.find((item, index) => item.id === id);
    return supplier;
  }

  getSupplierByName(name: string) {
    console.log({ name });
    const supplier = this.data.find(
      (item) => item.name.toLowerCase() === name.toLowerCase()
    );
    return supplier;
  }

  deleteSupplierFromDB(id: string) {
    const index = this.data.findIndex((item) => {
      return item.id === id;
    });
    this.data.splice(index, 1);
  }

  readDb() {
    this.data = JSON.parse(fs.readFileSync(this.dbPath, "utf8"));
  }

  writeDB() {
    fs.writeFileSync(this.dbPath, JSON.stringify(this.data));
  }
}
