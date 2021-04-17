import { Directive, ElementRef, HostListener, Renderer2, OnInit, HostBinding } from '@angular/core';

@Directive({
  selector: '[appChangeStyle]'
})
export class ChangeStyleDirective implements OnInit{

@HostBinding('style.backgroundColor') change:string;

  constructor() {}

  ngOnInit(){}

  @HostListener ('mouseenter') mouseEnterEvent (eventData:Event){
    this.change="green";
  }
  @HostListener ('mouseleave') mouseLeaveEvent (eventData:Event){
    this.change="transparent";
  }


}
