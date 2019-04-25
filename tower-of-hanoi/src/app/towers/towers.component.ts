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
    let disk1PositionLeftOffset = towerLeftOffset - this.towerBorder + this.towerPosition * 2;

    this.diskPositions = [
          new DiskPosition(disk1PositionLeftOffset, disk1PositionTopOffset),
          new DiskPosition(disk1PositionLeftOffset, disk1PositionTopOffset - this.distanceBetweenDisks),
          new DiskPosition(disk1PositionLeftOffset, disk1PositionTopOffset - this.distanceBetweenDisks * 2)
    ]
  }

  initializeDisks(disks: Map<string, DiskComponent>) {
    let positionIndex = 0;
    disks.forEach((key, value) => this.moveDiskToPosition(key, this.diskPositions[positionIndex++]));
  }

  removeDiskFromTower(diskId: string) {
    let diskPosition = this.diskPositions.find((position) => position.hasDisk(diskId));
    diskPosition.disk = undefined;
  }

  moveDiskToTover(disk: DiskComponent) {
    let freePosition = this.diskPositions.find((diskPosition) => !diskPosition.disk);
    this.moveDiskToPosition(disk, freePosition);
  }

  hasDisksAbove(disk: DiskComponent): boolean {
    let positionIndex = this.diskPositions.findIndex((position) => position.hasDisk(disk.diskId));
    return positionIndex !== 2 &&
           this.diskPositions[positionIndex+1].disk !== undefined;
  }

  canPlaceDisk(disk: DiskComponent): boolean {
    let topDiskOnTower = this.diskPositions[2].disk || this.diskPositions[1].disk || 
                         this.diskPositions[0].disk;
    return (topDiskOnTower === undefined) || topDiskOnTower.size > disk.size; 
  }

  private moveDiskToPosition(disk: DiskComponent, diskPosition: DiskPosition) {
    let diskWidth = +document.getElementById(disk.diskId).style.width.replace("px", "");
    let diskTopOffset = diskPosition.topOffset;
    let diskLeftOffset = diskPosition.leftOffset - diskWidth / 2 + this.towerWidth / 2;
   
    disk.leftOffset = diskLeftOffset;
    disk.topOffset = diskTopOffset;
    disk.tower = this;
    diskPosition.disk = disk;
  }

 
}

