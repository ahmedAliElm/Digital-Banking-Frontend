import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-customer',
  imports: [ReactiveFormsModule],
  templateUrl: './new-customer.component.html',
  styleUrl: './new-customer.component.css'
})

export class NewCustomerComponent {

  newCustomerFormGroup!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {

    this.newCustomerFormGroup = this.fb.group({

      name: this.fb.control(""),
      email: this.fb.control("")
    })
  }

  handleSaveCustomer() {


  }
}

