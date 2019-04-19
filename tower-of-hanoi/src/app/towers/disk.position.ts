import { DiskComponent } from '../disk/disk.component';

export class DiskPosition {
    center: number;
    topOffset: number;
    disk: DiskComponent;

    constructor(center: number, topOffset: number){
        this.center = center;
        this.topOffset = topOffset;
    }
}