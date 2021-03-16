import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { RentalDetailDto } from 'src/app/models/rental/rentalDetailDto';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl ='https://localhost:44369/api/rentals/getallrentaldetails';

  constructor(private httpClient:HttpClient) { }

  getAll():Observable<ListResponseModel<RentalDetailDto>>{
    return this.httpClient.get<ListResponseModel<RentalDetailDto>>(this.apiUrl);
  }
}
