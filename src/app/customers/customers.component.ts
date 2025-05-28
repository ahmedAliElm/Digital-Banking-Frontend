import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerService } from '../services/customer.service';
import { catchError, Observable, throwError } from 'rxjs';
import { Customer } from '../models/customers.model';

@Component({
  standalone: true,
  selector: 'app-customers',
  imports: [CommonModule],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})

export class CustomersComponent implements OnInit {

  customers!: Observable<Array<Customer>>;
  errorMessage!: string;

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
      
    this.customers = this.customerService.getCustomers().pipe(
      
      catchError(err => {

        this.errorMessage = err.message;
        return throwError(err);
      })
    );
  }
}

