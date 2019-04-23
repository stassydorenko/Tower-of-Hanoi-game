import { Component, OnInit } from '@angular/core';
import { DiskComponent } from '../disk/disk.component';
import { DiskPosition } from './disk.position';


@Component({
  selector: 'app-towers',
  templateUrl: './towers.component.html',
  styleUrls: ['./towers.component.css']
})
export class TowersComponent implements OnInit {

  private TOWER_BORDER = 4;
  private DISK_BORDER = 2;
  private DISTANCE_BETWEEN_DISKS = 60;
  private DISK_WIDTH = 250;

  towerId: string;
  towerPosition: number;
  diskPositions: DiskPosition[];

  constructor(towerId: string, towerPosition: number) {
    this.towerId = towerId;
    this.towerPosition = towerPosition;
  }
  
  ngOnInit() {
    this.initializeTower();
  }

  private initializeTower() {
    let clientRect = document.getElementById(this.towerId).getBoundingClientRect();
    let towerTopOffset = clientRect.top;
    let towerLeftOffset = clientRect.left;

    let disk1PositionTopOffset = towerTopOffset - towerLeftOffset / 5
    let disk1PositionLeftOffset = towerLeftOffset - this.TOWER_BORDER - this.DISK_BORDER;

    let diskPosition1 = new DiskPosition(disk1PositionLeftOffset, 
                                         disk1PositionTopOffset);                       
    let diskPosition2 = new DiskPosition(disk1PositionLeftOffset, 
                                         disk1PositionTopOffset + this.DISTANCE_BETWEEN_DISKS);
    let diskPosition3 = new DiskPosition(disk1PositionLeftOffset, 
                                         disk1PositionTopOffset + this.DISTANCE_BETWEEN_DISKS * 2);
    this.diskPositions = [diskPosition1, diskPosition2, diskPosition3];
  }

  createDisks() {
    let disk1 = new DiskComponent(3);
    let diskPosition1 = this.diskPositions[0];
    disk1.topOffset = diskPosition1.topOffset;
    disk1.leftOffset = diskPosition1.leftOffset - this.DISK_WIDTH / 2;
    diskPosition1.disk = disk1;

    let disk2 = new DiskComponent(2);
    let diskPosition2 = this.diskPositions[1];
    disk1.topOffset = diskPosition1.topOffset;
    disk1.leftOffset = diskPosition1.leftOffset - this.DISK_WIDTH / 2;
    diskPosition2.disk = disk2;

    let disk3 = new DiskComponent(1);
    let diskPosition3 = this.diskPositions[2];
    disk1.topOffset = diskPosition1.topOffset;
    disk1.leftOffset = diskPosition1.leftOffset - this.DISK_WIDTH / 2;
    diskPosition3.disk = disk3;
  }

}
