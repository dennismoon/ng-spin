import { Component } from '@angular/core';

import { SpinnerService } from './spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private spinTimeout: number = 5;

  constructor(
    private spinnerService: SpinnerService
  ) { }

  public spin(event: MouseEvent): void {

    const timeoutMs = this.spinTimeout * 1000;

    console.log(`Showing spinner for ${timeoutMs} milliseconds`);

    event.preventDefault();

    this.spinnerService.show();

    setTimeout(() => {
      this.spinnerService.hide();
    }, timeoutMs);
  }
}
