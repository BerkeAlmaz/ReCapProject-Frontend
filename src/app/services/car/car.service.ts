import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from 'src/app/models/car/car';
import { CarDetailDto } from 'src/app/models/car/carDetailDto';
import { ListResponseModel } from 'src/app/models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = 'https://localhost:44369/api/';

  constructor(private httpClient: HttpClient) {}

  getAllCarDetails(): Observable<ListResponseModel<CarDetailDto>> {
    let newPath = this.apiUrl + 'cars/getallcardetails';
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }

  getCarsByBrand(brandId: number): Observable<ListResponseModel<CarDetailDto>> {
    let newPath = this.apiUrl + 'Cars/getcardetailsbybrand?brandId=' + brandId;
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }

  getCarsByColor(colorId:number):Observable<ListResponseModel<CarDetailDto>>{
    let newPath = this.apiUrl + "Cars/getcardetailsbycolor?colorId=" + colorId;
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }
}
