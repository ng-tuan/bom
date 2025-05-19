import {
  IsString,
  IsOptional,
  IsNumber,
  IsBoolean,
  MinLength,
  MaxLength,
} from 'class-validator';

export class CreateMaterialDto {
  @IsString()
  @MinLength(1)
  @MaxLength(100)
  name: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  @MaxLength(20)
  unit?: string;

  @IsNumber()
  @IsOptional()
  unit_price?: number;

  @IsString()
  @IsOptional()
  @MaxLength(50)
  category?: string;

  @IsBoolean()
  @IsOptional()
  is_active?: boolean;
}
