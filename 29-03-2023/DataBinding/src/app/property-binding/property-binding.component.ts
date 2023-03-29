import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent {
  source : String = "../assets/wallpaperflare.com_wallpaper.jpg";
  flag : boolean = true;
  displayImage() {
    this.flag = false;
    return this.flag;
  }
}
