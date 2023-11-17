import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { IProduct } from 'src/app/interface/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent {
  searchText:string=""
  products!:IProduct[];
  title:'pagination' | undefined;
 POSTS:any;
 page:number =1;
 count:number = 0;
 tableSize:number = 5;
 tableSizes: any = [5,10, 15 ,20]

  constructor(private productService:ProductService){

  }
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
  async removeProduct(id:number){
    const confirm = window.confirm('bạn có chắc chắn muốn xóa')
    if(!confirm) return;
    try{
      this.products = await lastValueFrom(this.productService.removeProduct(id))
      alert('bạn xóa thành công')
    }catch (error){

    }
    
  }
}
