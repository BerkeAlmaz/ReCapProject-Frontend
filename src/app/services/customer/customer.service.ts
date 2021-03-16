import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerDetailDto } from 'src/app/models/customer/customerDetailDto';
import { ListResponseModel } from 'src/app/models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl='https://localhost:44369/api/customers/getallcustomerdetails';

  constructor(private httpClient:HttpClient) { }

  getAllCustomerDetails():Observable<ListResponseModel<CustomerDetailDto>>{
    return this.httpClient.get<ListResponseModel<CustomerDetailDto>>(this.apiUrl);
  }
}
