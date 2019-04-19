import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-disk',
  templateUrl: './disk.component.html',
  styleUrls: ['./disk.component.css']
})
export class DiskComponent implements OnInit {

  private size: number;

  constructor(size: number) {
    this.size = size;
   }

  ngOnInit() {
  }

}
