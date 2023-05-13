import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { BusPlatformModalComponent } from "./bus-platform-modal/bus-platform-modal.component";

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

  public openProjectDetailModal() {
    this.dialog.open(BusPlatformModalComponent, {
      height: '70%',
      width: '80%',
      ariaLabel: 'label'
    }
      );

  }

}
