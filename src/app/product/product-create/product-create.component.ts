import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from 'src/app/service/product.service';
import {MenuItem,MessageService} from 'primeng/api';


@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css'],
 
 
})
export class ProductCreateComponent implements OnInit {
 
  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
  });
  constructor(private productService: ProductService,
    private messageService: MessageService
    ) { }
  
    

  ngOnInit(): void {
    
  }
  submit() {
    const product = this.productForm.value;
    this.productService.saveProduct(product);
     this.messageService.add({ severity:'success', summary: 'Summary Text', detail: 'Thêm mới thành công'});
    this.productForm.reset();
   
  }
  

}
