import { getLocaleFirstDayOfWeek } from '@angular/common';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})

export class MyComponentComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{
  @Input() value: String = 'Angular';
  //constructor is not a lifecycle hook 
  //first call
  constructor() {
    console.log("Constructor Called");
    console.log(this.value);
  }
  //ngOnChanges is the only lifecycle hook 
  //that takes an argument.
  //second call - it will be called whenever there 
  //will be change in the input data.
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges Called');
    console.log(changes);
  }

  //third change
  ngOnInit(): void {
    console.log('ngOnInit Called');
    console.log(this.value);
  }

  //when something changes(event or input change) ngDoCheck is called.
  ngDoCheck(): void {
    console.log('ngDoCheck Called');
  }

  //This lifecycle hook is called when the component projected
  //content is fully initialised. It is only called once.
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit is called');
  }

  //This lifecycle hook is called whenever the projected content
  //changes.
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked is called');
  }

  //This hook is called when component view and all its 
  //child component view are fully initialised.
  ngAfterViewInit(): void {
    console.log('ngAfterViewInitCalled');
  }

  //This hook is called for each change detection cycle
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called');
  }
}
