import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand/brand';
import { BrandService } from 'src/app/services/brand/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  dataLoaded:boolean = false;
  brands:Brand[]=[];

  constructor(private brandService:BrandService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.brandService.getAll().subscribe((result)=>{
        this.brands = result.data;
        this.dataLoaded = true;
    })
  }
}
