import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentalResponseModel } from 'src/app/models/rental/rentalResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl ='https://localhost:44369/api/rentals/getallrentaldetails';

  constructor(private httpClient:HttpClient) { }

  getAll():Observable<RentalResponseModel>{
    return this.httpClient.get<RentalResponseModel>(this.apiUrl);
  }
}
