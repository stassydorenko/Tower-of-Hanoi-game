import { DiskComponent } from '../disk/disk.component';

export class DiskPosition {
    leftOffset: number;
    topOffset: number;
    disk: DiskComponent;

    constructor(leftOffset: number, topOffset: number){
        this.leftOffset = leftOffset;
        this.topOffset = topOffset;
    }
}