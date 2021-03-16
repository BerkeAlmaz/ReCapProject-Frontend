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

  currentBrand:Brand | null = null;

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

  setCurrentBrand(brand:Brand){
    this.currentBrand = brand;
  }

  setCurrentBrandNull(){
    this.currentBrand = null;
  }

  getCurrentBrand(brand:Brand | null){
    if(this.currentBrand==brand){
      return "list-group-item active"
    }
    else{
      return "list-group-item"
    }
  }
}
