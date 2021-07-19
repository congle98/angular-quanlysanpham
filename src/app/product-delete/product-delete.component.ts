import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Product } from '../model/product';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  product:any;
  constructor(private productService: ProductService,
    private ActivatedRoute: ActivatedRoute,
    private router:Router,
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.ActivatedRoute.paramMap.subscribe(params => {
      let id = params.get("id");
      this.product = this.productService.getProductById(id);
    })
  }

  delete(){
    if(this.product as Product){
      this.productService.delete(this.product);
      this.router.navigate(["/product/list"]);
      this.messageService.add({ severity:'success', summary: 'Summary Text', detail: 'Xoá thành công'});
    
    }
  }

  back(){
    this.router.navigate(["/product/list"]);
  }

}
