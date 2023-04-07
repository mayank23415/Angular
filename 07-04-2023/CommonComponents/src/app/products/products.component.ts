import { Component } from '@angular/core';

interface items{
  title: String;
  subtitle: String;
  img: String;
  content: String;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  items : items[] = [
    {title:'Polarised Filter', subtitle:'$99.99', img:'../../assets/wallpaperflare.com_wallpaper (1).jpg', content: ''},
    {title:'Polarised Filter', subtitle:'$99.99', img:'../../assets/wallpaperflare.com_wallpaper (1).jpg', content: ''},
    {title:'Polarised Filter', subtitle:'$99.99', img:'../../assets/wallpaperflare.com_wallpaper (1).jpg', content: ''},
    {title:'Polarised Filter', subtitle:'$99.99', img:'../../assets/wallpaperflare.com_wallpaper (1).jpg', content: ''},
    {title:'Polarised Filter', subtitle:'$99.99', img:'../../assets/wallpaperflare.com_wallpaper (1).jpg', content: ''},
    {title:'Polarised Filter', subtitle:'$99.99', img:'../../assets/wallpaperflare.com_wallpaper (1).jpg', content: ''},
    {title:'Polarised Filter', subtitle:'$99.99', img:'../../assets/wallpaperflare.com_wallpaper (1).jpg', content: ''}
  ]
}
