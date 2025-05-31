import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerService } from '../services/customer.service';
import { catchError, Observable, throwError } from 'rxjs';
import { Customer } from '../models/customers.model';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-customers',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})

export class CustomersComponent implements OnInit {

  customers!: Observable<Array<Customer>>;
  errorMessage!: string;
  searchFormGroup!: FormGroup;

  constructor(private customerService: CustomerService, private fb: FormBuilder) {}

  ngOnInit(): void {

    this.searchFormGroup = this.fb.group({

      keyword: this.fb.control("")
    })
      
    this.handleSearchCustomers();
  }

  handleSearchCustomers() {

    let kw = this.searchFormGroup?.value.keyword;

    this.customers = this.customerService.searchCustomers(kw).pipe(
      
      catchError(err => {

        this.errorMessage = err.message;
        return throwError(err);
      })
    );
  }
}

