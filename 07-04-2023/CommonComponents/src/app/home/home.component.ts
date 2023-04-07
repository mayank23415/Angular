import { Component } from '@angular/core';

interface items{
  title: String;
  subtitle: String;
  img: String;
  content: String;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  items1: items[]=[
    {title: 'First Permanent Photograph', subtitle: '1826', img: '../../assets/First-Photo-Ever-Taken-960x668.jpg', content: 'The first permanent photograph was captured in 1826 (some sources say 1827) by Joseph Nicéphore Niépce in France. It shows the roof of a building lit by the sun.'}
  ];

  items2: items[]=[
    {title: 'Ansel Adams', subtitle: '1The Tetons and the Snake River, by Ansel Adams.', img: '../../assets/Ansel-Adams-Snake-River-photo-960x769.jpg', content: 'The first permanent photograph was captured in 1826 (some sources say 1827) by Joseph Nicéphore Niépce in France. It shows the roof of a building lit by the sun.'}
  ]
}
