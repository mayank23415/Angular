import { Component } from '@angular/core';

interface product{
  name: String;
  price: String;
  img: String;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: product[];
  constructor() {
    this.products = [
      {name:'Polarised Filter', price:'$99.99', img:'../../assets/wallpaperflare.com_wallpaper (1).jpg'},
      {name:'Polarised Filter', price:'$99.99', img:'../../assets/wallpaperflare.com_wallpaper (1).jpg'},
      {name:'Polarised Filter', price:'$99.99', img:'../../assets/wallpaperflare.com_wallpaper (1).jpg'},
      {name:'Polarised Filter', price:'$99.99', img:'../../assets/wallpaperflare.com_wallpaper (1).jpg'},
      {name:'Polarised Filter', price:'$99.99', img:'../../assets/wallpaperflare.com_wallpaper (1).jpg'}
    ]
  }
}
