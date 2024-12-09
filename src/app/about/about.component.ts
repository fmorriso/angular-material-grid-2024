import {Component, inject} from '@angular/core';
//
import {AngularVersionInformationService} from '../shared/angular-version-information.service';
import {MaterialVersionInformationService} from '../shared/material-version-information.service';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  protected angularVersion: string;
  protected materialVersion: string;
  constructor(
    private ngVersion: AngularVersionInformationService,
    private matVersion: MaterialVersionInformationService
  ) {
    this.angularVersion = ngVersion.versionFull;
    this.materialVersion = matVersion.versionFull;
  }
}
