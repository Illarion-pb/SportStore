import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/from";

@Injectable()

export class StaticDataSource {
    private products: Product[] = [
        new Product(1, "Product 1", "Category 1", "About Product 1", 100),
        new Product(2, "Product 2", "Category 2", "About Product 2", 101),
        new Product(3, "Product 3", "Category 3", "About Product 3", 102),
        new Product(4, "Product 4", "Category 4", "About Product 4", 103),
        new Product(5, "Product 5", "Category 5", "About Product 5", 104),
        new Product(6, "Product 6", "Category 6", "About Product 6", 105),
        new Product(7, "Product 7", "Category 7", "About Product 7", 106),
        new Product(8, "Product 8", "Category 8", "About Product 8", 107),
        new Product(9, "Product 9", "Category 9", "About Product 9", 108),
        new Product(10, "Product 10", "Category 10", "About Product 10", 109),
        new Product(11, "Product 11", "Category 11", "About Product 11", 110),
        new Product(12, "Product 12", "Category 12", "About Product 12", 111),
        new Product(13, "Product 13", "Category 13", "About Product 13", 112),
        new Product(14, "Product 14", "Category 14", "About Product 14", 113),
        new Product(15, "Product 15", "Category 15", "About Product 15", 114),
    ];

    getProducts(): Observable<Product[]> {
        return Observable.from([this.products]);
    }
}