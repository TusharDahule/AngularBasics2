import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated //None , Native
})
export class ServerElementComponent implements 
OnInit,
 OnChanges,
  DoCheck,
   AfterContentInit,
   AfterContentChecked,
   AfterViewInit,
   AfterViewChecked,
   OnDestroy{

 @Input('srvElement') element:{ type:string,name:string,content:string}; //element is JavaScript Object and srvElement is alias name for element property
  @Input() name:string; // onChangeFirst demo (onChanges)

@ViewChild('heading',{static:true}) heading:ElementRef; //demo when this ViewChild value can be used
@ContentChild('contentParagraph',{static:true}) contentParagraph:ElementRef;

  constructor() { 
    console.log("constructor called");
  }

  ngOnInit(): void {
    console.log("ngOnInit called");
    console.log('Inside ngOnInit, View Child heading content :' + this.heading.nativeElement.textContent);
    console.log('Inside ngOnInit, Content Child contentParagraph content :' + this.contentParagraph.nativeElement.textContent);
  }

  ngOnChanges( changes : SimpleChanges){
    console.log("ngOnChanges called");
    console.log(changes);
  }

  ngDoCheck(){ //whenever there is change
    console.log("ngDoCheck called");
  }

  ngAfterContentInit(){ // called once after content projection
    console.log("ngAfterContentInit called");
    console.log('Inside ngOnInit, Content Child contentParagraph content :' + this.contentParagraph.nativeElement.textContent);
  }

  ngAfterContentChecked(){ 
    console.log("ngAfterContentChecked called");
  }

  
  ngAfterViewInit(){ 
    console.log("ngAfterViewInit called");
    console.log('Inside ngAfterViewInit, View Child heading content :' + this.heading.nativeElement.textContent);

  }

  ngAfterViewChecked(){ 
    console.log("ngAfterViewChecked called");
  }

  ngOnDestroy(){
    console.log("ngOnDestroy called");
  }


}
