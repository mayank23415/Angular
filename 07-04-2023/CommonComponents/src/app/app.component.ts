import { Component } from '@angular/core';

interface item{
  title: String;
  subtitle: String;
  content: String;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  items : item[] = [
    {title: "Share Module", subtitle: "Common Component", content: "If you want to use a component across multiple modules, you’ll need to create a “shared” module and add that component to the shared module’s exports. Then you add that shared module into your other modules imports."}
  ]
}
