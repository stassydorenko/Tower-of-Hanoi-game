import { Component, OnInit } from '@angular/core';
import { DiskComponent } from '../disk/disk.component';
import { DiskPosition } from './disk.position';


@Component({
  selector: 'app-towers',
  templateUrl: './towers.component.html',
  styleUrls: ['./towers.component.css']
})
export class TowersComponent implements OnInit {

  towerBorder: number = 4;
  diskBorder: number = 2;
  distanceBetweenDisks: number = 60;
  diskWidth: number = 250;
  towerHeigth: number = 400;
  towerWidth: number = 40;
  towerId: string;
  towerPosition: number;
  diskPositions: DiskPosition[];

  constructor(towerId: string, towerPosition: number) {
    this.towerId = towerId;
    this.towerPosition = towerPosition;
    this.initializeTower();
  }
  
  ngOnInit() {
  }

  private initializeTower() {
    let clientRect = document.getElementById(this.towerId).getBoundingClientRect();
    let towerTopOffset = clientRect.top;
    let towerLeftOffset = clientRect.left;

    let disk1PositionTopOffset = towerTopOffset + (this.towerHeigth - this.towerHeigth / 5)
    let disk1PositionLeftOffset = towerLeftOffset - this.towerBorder - this.diskBorder;

    let diskPosition1 = new DiskPosition(disk1PositionLeftOffset, 
                                         disk1PositionTopOffset);                       
    let diskPosition2 = new DiskPosition(disk1PositionLeftOffset, 
                                         disk1PositionTopOffset - this.distanceBetweenDisks);
    let diskPosition3 = new DiskPosition(disk1PositionLeftOffset, 
                                         disk1PositionTopOffset - this.distanceBetweenDisks * 2);
    this.diskPositions = [diskPosition1, diskPosition2, diskPosition3];
  }

  createDisks() {
    let diskPosition1 = this.diskPositions[0];
    let disk1TopOffset = diskPosition1.topOffset;
    let disk1LeftOffset = diskPosition1.leftOffset - this.diskWidth / 2;
    let disk1 = new DiskComponent(3, "disk1", disk1TopOffset, disk1LeftOffset);
    diskPosition1.disk = disk1;

    let diskPosition2 = this.diskPositions[1];
    let disk2TopOffset = diskPosition2.topOffset;
    let disk2LeftOffset = diskPosition2.leftOffset - this.diskWidth / 2;
    let disk2 = new DiskComponent(2, "disk2", disk2TopOffset, disk2LeftOffset);
    diskPosition2.disk = disk2;

    let diskPosition3 = this.diskPositions[2];
    let disk3TopOffset = diskPosition3.topOffset;
    let disk3LeftOffset = diskPosition3.leftOffset - this.diskWidth / 2;
    let disk3 = new DiskComponent(1, "disk3", disk3TopOffset, disk3LeftOffset);
    diskPosition3.disk = disk3;
  }

}
