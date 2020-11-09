import { Component } from '@angular/core';
import { Satellite } from './satellite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'orbit-report';
  sourceList: Satellite[];
  displayList: Satellite[];

  constructor() {
    this.sourceList = [];
    this.displayList = [];
    let satellitesUrl = 'https://handlers.education.launchcode.org/static/satellites.json';

    window.fetch(satellitesUrl).then(function (response) {
      response.json().then(function (data) {
        let fetchedSatellites = data.satellites;
        for (let satellite of fetchedSatellites) {
          console.log(satellite.name);
          let satelliteObj = new Satellite(satellite.name, satellite.type, satellite.launchDate, satellite.orbitType, satellite.operational);
          this.sourceList.push(satelliteObj);
          this.displayList = this.sourceList.slice(0);
        }

      }.bind(this));
    }.bind(this));

  }

  search(searchTerm: string): void {
    let matchingResults: Satellite[] = [];
    searchTerm = searchTerm.toLowerCase();
    for(let satellite of this.sourceList){
      if(satellite.name.toLowerCase().indexOf(searchTerm) >= 0){
        matchingResults.push(satellite);
      }
    }
    this.displayList = matchingResults;
  }

}


