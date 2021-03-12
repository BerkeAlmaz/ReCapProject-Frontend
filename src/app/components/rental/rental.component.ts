import { Component, OnInit } from '@angular/core';
import { RentalDetailDto } from 'src/app/models/rental/rentalDetailDto';
import { RentalService } from 'src/app/services/rental/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css'],
})
export class RentalComponent implements OnInit {
  rentals: RentalDetailDto[] = [];
  dataLoaded: boolean = false;

  constructor(private rentalService: RentalService) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.rentalService.getAll().subscribe((result) => {
      this.rentals = result.data;
      this.dataLoaded = true;
    });
  }
}
