import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { BusPlatformModalComponent } from "./bus-platform-modal/bus-platform-modal.component";
import { ZeroRiskModalComponent } from "./zero-risk-modal/zero-risk-modal.component";
import { MapGeneralizationModalComponent } from "./map-generalization-modal/map-generalization-modal.component";
import {IntellichefModalComponent} from "./intellichef-modal/intellichef-modal.component";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor(private dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  public openBusProjectDetailModal() {
    this.dialog.open(BusPlatformModalComponent, {
      height: '80%',
      width: '80%',
      panelClass: 'my-custom-dialog-class'
    });

  }

  public openZeroRiskDetailModal() {
    this.dialog.open(ZeroRiskModalComponent, {
      height: '80%',
      width: '80%',
      panelClass: 'my-custom-dialog-class'
    }
      );

  }

  public openMapGeneralizationModal() {
    this.dialog.open(MapGeneralizationModalComponent, {
      height: '90%',
      width: '80%',
      panelClass: 'my-custom-dialog-class'
    }
      );

  }
  public openIntellichefModal() {
    this.dialog.open(IntellichefModalComponent, {
      height: '90%',
      width: '80%',
      panelClass: 'my-custom-dialog-class'
    }
      );

  }

}
