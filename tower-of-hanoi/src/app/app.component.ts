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
  isStart: boolean = true;
  diskNumber: number;
  towers: TowersComponent[];

  ngOnInit() {
    this.towers = [new TowersComponent("tower1", 1),
                   new TowersComponent("tower2", 2),
                   new TowersComponent("tower3", 3)];   
    this.towers[0].createDisks();
  }

  onStart(): void {
    if(this.diskNumber != undefined) {
      //hide start game form
      this.isStart = false;    
    }
  }

}
