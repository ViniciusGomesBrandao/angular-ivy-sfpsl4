import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public isTheme1Active: boolean = true;

  public ngOnInit(): void {
    document.body.classList.add('theme-1');
  }

  public onChangeTheme(): void {
    if (this.isTheme1Active) {
      document.body.classList.remove('theme-1');
      document.body.classList.add('theme-2');
    } else {
      document.body.classList.remove('theme-2');
      document.body.classList.add('theme-1');
    }
    this.isTheme1Active = !this.isTheme1Active;
  }
}
