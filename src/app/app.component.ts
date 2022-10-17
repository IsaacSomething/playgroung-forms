import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { map, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'base-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  small$ = this.breakpointObserver.observe([Breakpoints.XSmall, Breakpoints.Small]).pipe(map(({ matches }) => matches));
  destroyed$ = new Subject<void>();

  constructor(private breakpointObserver: BreakpointObserver) {
    this.watchBreakpoint();
  }

  private watchBreakpoint() {
    this.breakpointObserver
      .observe([Breakpoints.XSmall])
      .pipe(takeUntil(this.destroyed$))
      .subscribe(result => {});
  }
}
