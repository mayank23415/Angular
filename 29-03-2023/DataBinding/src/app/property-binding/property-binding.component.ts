import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent {
  source : String = "../assets/wallpaperflare-cropped.jpg";
  flag : boolean = true;
  displayImage() {
    this.flag = false;
    return this.flag;
  }
}
