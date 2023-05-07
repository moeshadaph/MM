/* eslint-disable prettier/prettier */
import { Controller, Post, Body, Get, Param, Delete, Put } from "@nestjs/common";

import { ProductsService } from './products.service';
import { ApiBearerAuth, ApiOperation, ApiTags } from "@nestjs/swagger";

@ApiBearerAuth()
@ApiTags('pagnes')
@Controller('pagnes')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @ApiOperation({ summary: 'Creation pagne' })
  addProduct(
    @Body('title') prodTitle: string,
    @Body('description') prodDesc: string,
    @Body('imageUrl') prodimageUrl: string,
    @Body('price') prodPrice: number,
  ): any {
    const message = this.productsService.insertProduct(
      prodTitle,
      prodDesc,
      prodimageUrl,
      prodPrice,
    );
    return {  message };
  }
    
    @Get()
    @ApiOperation({ summary: 'Afficher tout les pagnes' })
    getAllProducts() {
        return this.productsService.getProducts();
    }
    @Get(':id')
    @ApiOperation({ summary: 'Afficher un pagne' })
    getProductById(@Param() param:any){
    return this.productsService.getProductById(+param.id);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Supprimer un pagne' })
    deleteProductById(@Param() param:any){
    return this.productsService.deleteProductById(+param.id);
    }

  @Put(':id')
  @ApiOperation({ summary: 'Modifier un pagne' })
  updateProduct(
    @Param('id') id: string,
    @Body('title') title: string,
    @Body('desc') desc: string,
    @Body('imageUrl') imageUrl: string,
    @Body('price') price: number
  ) {
    const result = this.productsService.updateProduct(+id, title, desc, imageUrl, price);
    return { message: result };
  }


}

