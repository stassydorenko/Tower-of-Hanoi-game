import { Component, OnInit, OnChanges } from '@angular/core';
import { DiskSize } from '../disk/disk-size';
import { TowersComponent } from '../towers/towers.component';

@Component({
  selector: 'app-disk',
  templateUrl: './disk.component.html',
  styleUrls: ['./disk.component.css']
})
export class DiskComponent {

  diskId: string;
  size: DiskSize;
  tower: TowersComponent;
  private _topOffset: number = 0;
  private _leftOffset: number = 0;
  

  constructor(size: DiskSize, diskId: string) {
    this.diskId = diskId;
    this.size = size;
   }


  get topOffset(): number {
     return this._topOffset;
  }

  set topOffset(value: number) {
    this._topOffset = value;
    document.getElementById(this.diskId).style.top = value + "px";
  }
  
  get leftOffset(): number {
    return this._leftOffset;
  }

  set leftOffset(value: number) {
    this._leftOffset = value;
    document.getElementById(this.diskId).style.left = value + "px";
  }



  

}
