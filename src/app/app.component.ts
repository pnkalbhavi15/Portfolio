import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'portfolio';
  router: any;
  about() {
    this.router.navigateByUrl('');
  }
  education() {
    this.router.navigateByUrl('/education');
  }
  honors() {
    this.router.navigateByUrl('/honors');
  }
  publications() {
    this.router.navigateByUrl('/publications');
  }
  scores() {
    this.router.navigateByUrl('/scores');
  }
  skills() {
    this.router.navigateByUrl('/skills');
  }
}
