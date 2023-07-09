import { Component, OnInit } from '@angular/core';
import { BerlinClockService } from './berlin-clock.service';

@Component({
  selector: 'app-berlin-clock',
  templateUrl: './berlin-clock.component.html',
  styleUrls: ['./berlin-clock.component.css']
})
export class BerlinClockComponent {
  INDEX_OF_LAMP_OF_SECOND = 0;
  INDEX_OF_LAMP_OF_FIRST_FIVE_HOURS = 1;
  INDEX_OF_LAMP_OF_LAST_FIVE_HOURS = 4;
  INDEX_OF_LAMP_OF_FIRST_ONE_HOUR = 5;
  INDEX_OF_LAMP_OF_LAST_ONE_HOUR = 8;
  INDEX_OF_LAMP_OF_FIRST_FIVE_MINUTES = 9;
  INDEX_OF_LAMP_OF_LAST_FIVE_MINUTES = 19;
  INDEX_OF_LAMP_OF_FIRST_ONE_MINUTE = 20;
  INDEX_OF_LAMP_OF_LAST_ONE_MINUTE = 23;

  constructor(private berlinClockService: BerlinClockService) {}

  time: string= '';
  berlinClockTime: string = '';

  arrayRange(start: number, stop: number): number[] {
    return Array.from(
        { length: (stop - start) + 1 },
        (value, index) => start + index
      );
  }

  isOn(index: number): boolean {
    return !!this.berlinClockTime && this.berlinClockTime.charAt(index) !== 'O';
  }

  getBerlinClockTime(): void {
    this.berlinClockService.getBerlinClockTime(this.time).subscribe((result) => {
      this.berlinClockTime = result;
    });
  }

  isRedLampOfMinutes(i: number): boolean {
    return i === 11 || i === 14 || i === 17
  }
}
