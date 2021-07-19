import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ProductService } from './service/product.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MessageService]
})
export class AppComponent {
  title = 'angular-quanlysanpham';

  constructor(private productService: ProductService,
    private messageService: MessageService
    ) { }
  
}
