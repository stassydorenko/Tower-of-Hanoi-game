import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-disk',
  templateUrl: './disk.component.html',
  styleUrls: ['./disk.component.css']
})
export class DiskComponent implements OnInit {

  diskId: string;
  size: number;
  topOffset: number;
  leftOffset: number;

  constructor(size: number, diskId: string, topOffset: number, leftOffset: number) {
    this.diskId = diskId;
    this.size = size;
    this.topOffset = topOffset;
    this.leftOffset = leftOffset;

    let diskStyle = document.getElementById(this.diskId).style;
    diskStyle.top = this.topOffset + "px";
    diskStyle.left = this.leftOffset + "px";
   }

  ngOnInit() {
    
  }

}
