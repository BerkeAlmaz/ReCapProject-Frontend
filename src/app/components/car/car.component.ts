import { Component, OnInit } from '@angular/core';
import { CarDetailDto } from 'src/app/models/car/carDetailDto';
import { CarService } from 'src/app/services/car/car.service';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  carDetails:CarDetailDto[] = [];
  dataLoaded:boolean = false;

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.getAllCarDetails();
  }

  getAllCarDetails(){
    this.carService.getAllCarDetails().subscribe((response)=>{
        this.carDetails = response.data;
        this.dataLoaded = true;
    })
  }
}
