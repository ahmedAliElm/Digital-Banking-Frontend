import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Customer } from '../models/customers.model';
import { CustomerService } from '../services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-customer',
  imports: [ReactiveFormsModule],
  templateUrl: './new-customer.component.html',
  styleUrl: './new-customer.component.css'
})

export class NewCustomerComponent {

  newCustomerFormGroup!: FormGroup;

  constructor(private fb: FormBuilder, private customerService: CustomerService, private router: Router) {}

  ngOnInit(): void {

    this.newCustomerFormGroup = this.fb.group({

      name: this.fb.control("", [Validators.required, Validators.minLength(4)]),
      email: this.fb.control("", [Validators.email, Validators.required])
    })
  }

  handleSaveCustomer() {

    let customer: Customer = this.newCustomerFormGroup.value;

    this.customerService.saveCustomer(customer).subscribe({

      next: data => {

        alert("Customer saved successfully.");
        // this.newCustomerFormGroup.reset();
        this.router.navigateByUrl("/customers");
      },

      error: err => {

        console.log(err);
      }
    });
  }
}

