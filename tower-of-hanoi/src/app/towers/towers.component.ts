import { Component, OnInit } from '@angular/core';
import { DiskComponent } from '../disk/disk.component';
import { DiskPosition } from './disk.position';
import { DiskSize } from '../disk/disk-size';


@Component({
  selector: 'app-towers',
  templateUrl: './towers.component.html',
  styleUrls: ['./towers.component.css']
})
export class TowersComponent {

  towerBorder: number = 4;
  diskBorder: number = 2;
  distanceBetweenDisks: number = 60;
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
  
  private initializeTower() {
    let clientRect = document.getElementById(this.towerId).getBoundingClientRect();
    let towerTopOffset = clientRect.top;
    let towerLeftOffset = clientRect.left;

    let disk1PositionTopOffset  = towerTopOffset + (this.towerHeigth - this.towerHeigth / 5)
    let disk1PositionLeftOffset = towerLeftOffset - this.towerBorder - this.diskBorder;

    this.diskPositions = [
          new DiskPosition(disk1PositionLeftOffset, disk1PositionTopOffset),
          new DiskPosition(disk1PositionLeftOffset, disk1PositionTopOffset - this.distanceBetweenDisks),
          new DiskPosition(disk1PositionLeftOffset, disk1PositionTopOffset - this.distanceBetweenDisks * 2)
    ]
  }

  createDisks() {
    this.createDiskOnPosition(DiskSize.Large,  "disk1", this.diskPositions[0]);
    this.createDiskOnPosition(DiskSize.Medium, "disk2", this.diskPositions[1]);
    this.createDiskOnPosition(DiskSize.Small,  "disk3", this.diskPositions[2]);
  }

  createDiskOnPosition(diskSize: DiskSize, diskId: string, diskPosition: DiskPosition) {
    let diskWidth = +document.getElementById(diskId).style.width.replace("px", "");
    let diskTopOffset = diskPosition.topOffset;
    let diskLeftOffset = diskPosition.leftOffset - diskWidth / 2 + this.towerWidth / 2;
   
    let disk = new DiskComponent(diskSize, diskId);
    disk.leftOffset = diskLeftOffset;
    disk.topOffset = diskTopOffset;
    diskPosition.disk = disk;
  }

  containsDisk(diskId: string): boolean {
    return this.diskPositions
      .filter(
        (diskPosition) => diskPosition.disk.diskId === diskId
      ).length > 0;
  }

  canPlaceDisk(disk: DiskComponent): boolean {
    let result = false;
    let freePosition = this.diskPositions.find((diskPosition) => !diskPosition.disk);

    //if first position is empty - there are no disks on this tower
    let positionIndex = this.diskPositions.indexOf(freePosition);
    if(positionIndex === 0) {
      result = true;
    }
    else {
      let lowerDisk = this.diskPositions[positionIndex - 1].disk;
      if(lowerDisk.size > disk.size) {
        result = true;
      }
    }
    return result;

    }

  }


