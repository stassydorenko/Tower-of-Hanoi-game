import { Component, OnInit } from '@angular/core';
import { TowersComponent } from './towers/towers.component';
import { DiskComponent } from './disk/disk.component';
import { DiskPosition } from './towers/disk.position';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title: string = 'The Towers of Hanoi game';
  towers: TowersComponent[];
  selectedDiskId: string;
  selectedDiskBorder: string = "4px solid Lime";
  nonSelectedDiskBorder: string = "2px solid black";

  ngOnInit() {
    this.towers = [new TowersComponent("tower1", 1),
                   new TowersComponent("tower2", 2),
                   new TowersComponent("tower3", 3)];   
    this.towers[0].createDisks();
  }

  onDiskClick(event) {
    this.deselectPreviousDisk();    
    this.selectDisk(event);
  }

  // onTowerClick(event) {
  //   if(this.selectedDiskId != undefined) {

  //   }
  // }

  // private isTowerClickValid(event): boolean {
  //   if(this.selectedDiskId === undefined) {
  //     return false;
  //   }
  //   if(this.towers.filter()          event.currentTarget.id 
  // }

  private selectDisk(event){
    let diskId = event.currentTarget.id;

    if(this.selectedDiskId != diskId) {
      this.selectedDiskId = diskId;
      document.getElementById(this.selectedDiskId).style.border = this.selectedDiskBorder;
      this.changeWidthAndHeigth(this.selectedDiskId, 5);
    }
    else {
      this.selectedDiskId = undefined;
    }    
  }

  private deselectPreviousDisk() {
    if(this.selectedDiskId != undefined) {
      document.getElementById(this.selectedDiskId).style.border = this.nonSelectedDiskBorder;
      this.changeWidthAndHeigth(this.selectedDiskId, -5);
    } 
  }

  private changeWidthAndHeigth(elementId: string, difference: number) {
    let elementStyle = document.getElementById(this.selectedDiskId).style;
    let widthNumber = +elementStyle.width.replace("px", "");
    let heigthNumber = +elementStyle.height.replace("px", "");
    elementStyle.width = widthNumber + difference + "px";
    elementStyle.height = heigthNumber + difference + "px";
  }

}
