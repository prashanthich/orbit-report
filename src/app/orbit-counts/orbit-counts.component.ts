import { Component, Input, OnInit } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {
  @Input() satellites: Satellite[];
  types: string[]=[];
  constructor() {
  }

  ngOnInit() {
  }
  countByType(type: string): number {
    return this.satellites.filter(satellite => satellite.type.toLowerCase() === type.toLowerCase()).length;
  }
  getUniqueTypes(): string[] {
    for(let item of this.satellites){
      if(!this.types.includes(item.type)){
        this.types.push(item.type);
      }
    }
    return this.types;
  }
}
