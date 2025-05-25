import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Inventory } from '../entities/inventory.entity';
import { CreateInventoryDto } from '../dto/create-inventory.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class InventoryService {
  constructor(
    @InjectRepository(Inventory)
    private inventoryRepository: Repository<Inventory>,
  ) {}

  async create(createInventoryDto: CreateInventoryDto): Promise<Inventory> {
    try {
      const inventory = this.inventoryRepository.create({
        inventory_id: uuidv4(),
        ...createInventoryDto,
      });

      return await this.inventoryRepository.save(inventory);
    } catch (error) {
      console.log('Error creating inventory:', error);
      throw new HttpException(
        'Failed to create inventory record',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findById(id: string): Promise<Inventory> {
    try {
      const inventory = await this.inventoryRepository.findOne({
        where: { inventory_id: id },
        relations: ['material'],
      });

      if (!inventory) {
        throw new HttpException('Inventory not found', HttpStatus.NOT_FOUND);
      }

      return inventory;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        'Failed to fetch inventory',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findAll(): Promise<Inventory[]> {
    try {
      return await this.inventoryRepository.find({
        relations: ['material'],
      });
    } catch (error) {
      console.log('Error fetching inventory records:', error);
      throw new HttpException(
        'Failed to fetch inventory records',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findByMaterialId(materialId: string): Promise<Inventory[]> {
    try {
      return await this.inventoryRepository.find({
        where: { material_id: materialId },
        relations: ['material'],
      });
    } catch (error) {
      console.log('Error fetching inventory records for material:', error);
      throw new HttpException(
        'Failed to fetch inventory records for material',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async update(
    id: string,
    updateData: Partial<CreateInventoryDto>,
  ): Promise<Inventory> {
    try {
      const inventory = await this.findById(id);
      Object.assign(inventory, updateData);
      return await this.inventoryRepository.save(inventory);
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        'Failed to update inventory',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async delete(id: string): Promise<void> {
    try {
      const result = await this.inventoryRepository.delete(id);
      if (result.affected === 0) {
        throw new HttpException('Inventory not found', HttpStatus.NOT_FOUND);
      }
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        'Failed to delete inventory',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
