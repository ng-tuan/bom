import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { Material } from '../entities/material.entity';
import { CreateMaterialDto } from '../dto/create-material.dto';
import { MaterialService } from '../services/material.service';

@Controller('materials')
export class MaterialController {
  constructor(private readonly materialService: MaterialService) {}

  @Post()
  async create(
    @Body() createMaterialDto: CreateMaterialDto,
  ): Promise<Material> {
    return this.materialService.create(createMaterialDto);
  }

  @Post('list')
  async createMany(
    @Body() createMaterialDtos: CreateMaterialDto[],
  ): Promise<Material[]> {
    return this.materialService.createMany(createMaterialDtos);
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Material> {
    return this.materialService.findById(id);
  }

  @Get()
  async getAll(): Promise<Material[]> {
    return this.materialService.findAll();
  }
}
