import { Component, OnInit } from '@angular/core';
import { HousingService } from 'src/app/services/housing.service';
import { Iproperty } from '../IProperty.interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  properties!: Array<Iproperty>;
  constructor(private housingservice:HousingService) {

  }

  ngOnInit(): void {

    this.housingservice.getAllProperties().subscribe(
      data=>{
        this.properties=data;
        console.log(data);
      },error=>{
        console.error();

      }
    );
  }

}
