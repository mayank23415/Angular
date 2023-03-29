import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DataBinding';
  flag : boolean = true;

  value : String = "This heading is printed string interpolation";
  source : String = "../assets/wallpaperflare.com_wallpaper.jpg";

  
  show() {
    this.flag = false;
  }
}
