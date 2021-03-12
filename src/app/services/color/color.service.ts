import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from 'src/app/models/color/color';
import { ColorResponseModel } from 'src/app/models/color/colorResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiUrl='https://localhost:44369/api/colors/getall';

  constructor(private httpClient:HttpClient) { }

  getAll():Observable<ColorResponseModel>{
    return this.httpClient.get<ColorResponseModel>(this.apiUrl)
  }
}
