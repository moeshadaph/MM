import { Injectable } from '@nestjs/common';
import { Product } from './product.model';

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  insertProduct(title: string, desc: string, imageUrl: string, price: number) {
    const newProduct = new Product(
      this.products.length + 1,
      title,
      desc,
      imageUrl,
      price,
    );
    this.products.push(newProduct);
    return 'Product create Successfully';
  }

  getProducts() {
    return [...this.products];
  }

  getProductById(id: number) {
    return this.products.find((p) => p.id === id);
  }

  deleteProductById(id: number) {
    const index = this.products.findIndex((p) => p.id === id);
    if (index !== -1) {
      this.products.splice(index, 1);
      return 'Product delete Successfully';
    }
    return 'Product not found';
  }

  updateProduct(
    id: number,
    title: string,
    desc: string,
    imageUrl: string,
    price: number,
  ) {
    const existingProduct = this.products.findIndex((p) => p.id === id);
    if (existingProduct != -1) {
      this.products[existingProduct] = {
        ...this.products[existingProduct],
        desc,
        imageUrl,
        price,
        title,
      };
      return 'Product deleted Successfully';
    }
    return 'Product not found';
  }
}
