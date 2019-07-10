import { Component, OnInit } from '@angular/core';
import { TowersComponent } from './towers/towers.component';
import { DiskComponent } from './disk/disk.component';
import { DiskPosition } from './towers/disk.position';
import { DiskSize } from './disk/disk-size';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title: string = 'The Towers of Hanoi game';
  endGame: boolean = false;
  selectedDiskId: string;
  selectedDiskBorder: string = "4px solid Lime";
  nonSelectedDiskBorder: string = "2px solid black";
  towers: TowersComponent[];
  disks:  Map<string, DiskComponent> = new Map();


  ngOnInit() {
    this.towers = [
      new TowersComponent("tower1", 1),
      new TowersComponent("tower2", 2),
      new TowersComponent("tower3", 3)
    ];

    this.disks.set("disk1", new DiskComponent(DiskSize.Large, "disk1"));
    this.disks.set("disk2", new DiskComponent(DiskSize.Medium, "disk2"));
    this.disks.set("disk3", new DiskComponent(DiskSize.Small, "disk3"));

    this.towers[0].initializeDisks(this.disks);
  }


  onDiskClick(event) {
    if(this.isDiskClickValid(event)) {
      this.deselectPreviousDisk();    
      this.selectDisk(event);
    }
  }


  onTowerClick(event) {
    let selectedTower = this.towers.find(
      (tower) => tower.towerId === this.getIdOfSelectedElement(event));

    if(this.isTowerClickValid(selectedTower)) {
      let disk = this.disks.get(this.selectedDiskId);
      disk.tower.removeDiskFromTower(disk.diskId);
      selectedTower.moveDiskToTover(disk);
    }

    this.deselectPreviousDisk();  
    this.selectedDiskId = undefined;

    if(this.isEndGame()) {
      this.endGame = true;
    }
  }


  private isEndGame(): boolean {
    let thirdTower = this.towers[2];
    return thirdTower.diskPositions[0].disk !== undefined && 
           thirdTower.diskPositions[1].disk !== undefined &&
           thirdTower.diskPositions[2].disk !== undefined 
  }


  private isDiskClickValid(event): boolean {
    let selectedDisk = this.disks.get(this.getIdOfSelectedElement(event));
    let currentTower = selectedDisk.tower;
    return !currentTower.hasDisksAbove(selectedDisk) && !this.endGame;
  }


  private isTowerClickValid(selectedTower: TowersComponent): boolean {
    let selectedDisk = this.disks.get(this.selectedDiskId);
    return this.selectedDiskId !== undefined &&
           selectedTower.towerId !==  selectedDisk.tower.towerId &&
           selectedTower.canPlaceDisk(selectedDisk) &&
           !this.endGame;

  }


  private selectDisk(event) {
    let diskId = this.getIdOfSelectedElement(event);
    if(this.selectedDiskId != diskId) {
      this.selectedDiskId = diskId;
      let elementStyle = document.getElementById(this.selectedDiskId).style;
      elementStyle.border = this.selectedDiskBorder;
      this.changeWidthAndHeigth(elementStyle, 5);
    }
    else {
      this.selectedDiskId = undefined;
    }    
  }


  private deselectPreviousDisk() {
    if(this.selectedDiskId != undefined) {
      let elementStyle = document.getElementById(this.selectedDiskId).style;
      elementStyle.border = this.nonSelectedDiskBorder;
      this.changeWidthAndHeigth(elementStyle, -5);
    } 
  }


  private changeWidthAndHeigth(elementStyle: CSSStyleDeclaration, difference: number) {
    let widthNumber = +elementStyle.width.replace("px", "");
    let heigthNumber = +elementStyle.height.replace("px", "");
    elementStyle.width = widthNumber + difference + "px";
    elementStyle.height = heigthNumber + difference + "px";
  }


  private getIdOfSelectedElement(event): string {
    return event.currentTarget.id;
  }

}
