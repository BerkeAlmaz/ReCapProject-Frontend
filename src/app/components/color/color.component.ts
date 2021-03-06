import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color/color';
import { ColorService } from 'src/app/services/color/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  colors:Color[]=[];
  dataLoaded:boolean=false;
  currentColor:Color | null = null;

  constructor(private colorService:ColorService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.colorService.getAll().subscribe((result)=>{
      this.colors = result.data;
      this.dataLoaded = true;
    })
  }

  setCurrentColor(color:Color){
    this.currentColor = color;
  }

  setCurrentColorNull(){
    this.currentColor = null;
  }

  getCurrentColor(color:Color | null){
    if(this.currentColor==color){
      return "list-group-item active"
    }
    else{
      return "list-group-item"
    }
  }
}
