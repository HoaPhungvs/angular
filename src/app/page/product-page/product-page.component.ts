import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { IProduct } from 'src/app/interface/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent {
  searchText:string="";
  products!:IProduct[];
  constructor(private productService:ProductService){

  }
 title:'pagination' | undefined;
 POSTS:any;
 page:number =1;
 count:number = 0;
 tableSize:number = 5;
 tableSizes: any = [5,10, 15 ,20]


 
  async ngOnInit(){
    try{
      this.products = await lastValueFrom(this.productService.getProducts())
    }catch (error){

    }
  }
  onTableDataChange(event:any){
    this.page = event;
    this.products
  }
  onTableSizeChange(event:any):void{
    this.tableSize= event.target.value;
    this.page = 1;
    this.products
  }
}
