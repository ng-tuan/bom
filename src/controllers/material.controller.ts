import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { Material } from '../entities/material.entity';
import { CreateMaterialDto } from '../dto/create-material.dto';
import { MaterialService } from '../services/material.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('Materials')
@Controller('materials')
export class MaterialController {
  constructor(private readonly materialService: MaterialService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new material' })
  @ApiResponse({
    status: 201,
    description: 'Material created successfully',
    type: Material,
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async create(
    @Body() createMaterialDto: CreateMaterialDto,
  ): Promise<Material> {
    return this.materialService.create(createMaterialDto);
  }

  @Post('list')
  @ApiOperation({ summary: 'Create multiple materials' })
  @ApiResponse({
    status: 201,
    description: 'Materials created successfully',
    type: [Material],
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async createMany(
    @Body() createMaterialDtos: CreateMaterialDto[],
  ): Promise<Material[]> {
    return this.materialService.createMany(createMaterialDtos);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get material by ID' })
  @ApiResponse({ status: 200, description: 'Material found', type: Material })
  @ApiResponse({ status: 404, description: 'Material not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async getById(@Param('id') id: string): Promise<Material> {
    return this.materialService.findById(id);
  }

  @Get()
  @ApiOperation({ summary: 'Get all materials' })
  @ApiResponse({
    status: 200,
    description: 'List of materials',
    type: [Material],
  })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async getAll(): Promise<Material[]> {
    return this.materialService.findAll();
  }
}
