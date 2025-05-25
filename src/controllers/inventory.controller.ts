import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { Inventory } from '../entities/inventory.entity';
import { CreateInventoryDto } from '../dto/create-inventory.dto';
import { InventoryService } from '../services/inventory.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('Inventory')
@Controller('inventory')
export class InventoryController {
  constructor(private readonly inventoryService: InventoryService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new inventory record' })
  @ApiResponse({
    status: 201,
    description: 'Inventory record created successfully',
    type: Inventory,
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async create(
    @Body() createInventoryDto: CreateInventoryDto,
  ): Promise<Inventory> {
    return this.inventoryService.create(createInventoryDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get inventory record by ID' })
  @ApiResponse({
    status: 200,
    description: 'Inventory record found',
    type: Inventory,
  })
  @ApiResponse({ status: 404, description: 'Inventory record not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async getById(@Param('id') id: string): Promise<Inventory> {
    return this.inventoryService.findById(id);
  }

  @Get()
  @ApiOperation({ summary: 'Get all inventory records' })
  @ApiResponse({
    status: 200,
    description: 'List of inventory records',
    type: [Inventory],
  })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async getAll(): Promise<Inventory[]> {
    return this.inventoryService.findAll();
  }

  @Get('material/:materialId')
  @ApiOperation({
    summary: 'Get all inventory records for a specific material',
  })
  @ApiResponse({
    status: 200,
    description: 'List of inventory records for the material',
    type: [Inventory],
  })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async getByMaterialId(
    @Param('materialId') materialId: string,
  ): Promise<Inventory[]> {
    return this.inventoryService.findByMaterialId(materialId);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update an inventory record' })
  @ApiResponse({
    status: 200,
    description: 'Inventory record updated successfully',
    type: Inventory,
  })
  @ApiResponse({ status: 404, description: 'Inventory record not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async update(
    @Param('id') id: string,
    @Body() updateData: Partial<CreateInventoryDto>,
  ): Promise<Inventory> {
    return this.inventoryService.update(id, updateData);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete an inventory record' })
  @ApiResponse({
    status: 200,
    description: 'Inventory record deleted successfully',
  })
  @ApiResponse({ status: 404, description: 'Inventory record not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async delete(@Param('id') id: string): Promise<void> {
    return this.inventoryService.delete(id);
  }
}
