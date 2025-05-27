import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerService } from '../services/customer.service';

@Component({
  standalone: true,
  selector: 'app-customers',
  imports: [CommonModule],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})

export class CustomersComponent implements OnInit {

  customers: any;
  errorMessage: string | undefined;

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
      
    this.customerService.getCustomers().subscribe({

      next: (data) => {

        this .customers = data;
      },

      error: (err) => {

        this.errorMessage = err;
      }
    })
  }
}

