import { Component, OnInit } from '@angular/core';
import { CustomerDetailDto } from 'src/app/models/customer/customerDetailDto';
import { CustomerService } from 'src/app/services/customer/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers:CustomerDetailDto[]=[];
  dataLoaded:boolean=false;

  constructor(private customerService:CustomerService) { }

  ngOnInit(): void {
    this.getAllCustomerDetails();
  }


  getAllCustomerDetails(){
    this.customerService.getAllCustomerDetails().subscribe((result)=>{
      this.customers = result.data;
      this.dataLoaded = true;
      console.log(result.success)
    })
  }
}
