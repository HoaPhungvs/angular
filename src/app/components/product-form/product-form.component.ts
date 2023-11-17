import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interface/product';
import { ProductService } from 'src/app/services/product.service';
import {firstValueFrom, lastValueFrom} from "rxjs"
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  product!:IProduct;
  mode:"create"|"update" ="create";
  productForm = this.formBuilder.group({
    name:['',[Validators.required]],
    price:['',[Validators.required,Validators.min(0)]],
    img:['',[Validators.required]],
    des:['',[Validators.required,Validators.minLength(10)]]
  })
 
  constructor(
    private formBuilder :FormBuilder,
    private productService:ProductService,
    private router:ActivatedRoute,
    private routers: Router
    ){
      
  }
  async ngOnInit(){
    const { id } = this.router.snapshot.params;
    if (id) {
      try {
        // call API to get product by id
        this.product = await firstValueFrom(this.productService.getProductById(id));
        // set value for Form
        this.productForm.patchValue(this.product as any);
        this.mode = 'update';
      } catch (error: any) {
        console.log(error.message)
      }
    }
  }
  
  async onSubmit(){
    if (this.productForm.invalid) return;
    if (this.mode === 'update') {
      const product: any = { ...this.product, ...this.productForm.value };
      await firstValueFrom(this.productService.updateProduct(product))
      alert('Update product successfully!')
      this.routers.navigate(['admin/product'])
    } else {
      await firstValueFrom(this.productService.addProduct(this.productForm.value as IProduct))
      alert('Create product successfully!')
      this.routers.navigate(['admin/product'])
    }

  }
}
