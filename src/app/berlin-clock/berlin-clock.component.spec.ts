import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { BerlinClockService } from './berlin-clock.service';

import { BerlinClockComponent } from './berlin-clock.component';

describe('BerlinClockComponent', () => {
  let component: BerlinClockComponent;
  let fixture: ComponentFixture<BerlinClockComponent>;
  const fakeService = jasmine.createSpyObj('BerlinClockService', ['getBerlinClockTime']);
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpClientModule
      ],
      declarations: [ BerlinClockComponent ],
      providers: [{ provide: BerlinClockService, useValue: fakeService}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BerlinClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should second lamp be On', fakeAsync(() => {
    fakeService.getBerlinClockTime.and.returnValue(of('YOOOOOOOOOOOOOOOOOOOOOOO'));
    fixture.debugElement.query(By.css('button')).triggerEventHandler('click', null);
    tick();
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('#circle')).nativeElement.classList.contains('yellow-lamp')).toBe(true);
  }));

  it('should second lamp be Off', fakeAsync(() => {
    fakeService.getBerlinClockTime.and.returnValue(of('OOOOOOOOOOOOOOOOOOOOOOOO'));
    fixture.debugElement.query(By.css('button')).triggerEventHandler('click', null);
    tick();
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('#circle')).nativeElement.classList.contains('yellow-lamp')).toBe(false);
  }));
});
