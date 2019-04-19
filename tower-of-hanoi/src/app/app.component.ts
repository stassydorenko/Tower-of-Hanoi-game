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

  private title = 'The Towers of Hanoi game';
  private isStart: boolean = true;
  private diskNumber: number;
  private towers: TowersComponent[];

  ngOnInit() {
    let tower1 = new TowersComponent(1);
    let tower1DiskPosition1 = new DiskPosition();
    // tower1DiskPosition1.x = 

    // tower1.diskPositions[0] = 

  }

  onStart(): void {
    if(this.diskNumber != undefined) {
      //hide start game form
      this.isStart = false;
     


    }
    
  }

}
