import { Component, OnInit } from '@angular/core';
import { DiskComponent } from '../disk/disk.component';
import { DiskPosition } from './disk.position';


@Component({
  selector: 'app-towers',
  templateUrl: './towers.component.html',
  styleUrls: ['./towers.component.css']
})
export class TowersComponent implements OnInit {

  position: number;
  diskPositions: DiskPosition[];

  constructor(position: number) {
     this.position = position;
  }

  ngOnInit() {
  }

}
