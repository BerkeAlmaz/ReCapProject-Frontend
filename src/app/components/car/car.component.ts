import { Component, OnInit } from '@angular/core';
import { CarDetailDto } from 'src/app/models/car/carDetailDto';
import { CarService } from 'src/app/services/car/car.service';
import { ActivatedRoute } from '@angular/router';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  carDetails:CarDetailDto[] = [];
  dataLoaded:boolean = false;

  constructor(private carService: CarService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      if(params["brandId"]){
          this.getCarsByBrand(params["brandId"]);
      }
      else if(params["colorId"]){
        this.getCarsByColor(params["colorId"])
      }
      else{
        this.getAllCarDetails();
      }
    })
  }

  getAllCarDetails(){
    this.carService.getAllCarDetails().subscribe((response)=>{
        this.carDetails = response.data;
        this.dataLoaded = true;
    })
  }

  getCarsByBrand(brandId:number){
    this.carService.getCarsByBrand(brandId).subscribe(response =>{
      this.carDetails = response.data;
      this.dataLoaded = true;
    })
    
  }

  getCarsByColor(colorId:number){
    this.carService.getCarsByColor(colorId).subscribe(response=>{
      this.carDetails = response.data
      this.dataLoaded = true;
    })
  }
}
