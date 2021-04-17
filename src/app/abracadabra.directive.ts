import { Directive, TemplateRef, ViewContainerRef,Input } from '@angular/core';

@Directive({
  selector: '[appAbracadabra]'
})
export class AbracadabraDirective {

  constructor(private magie:TemplateRef<any>, private disparition:ViewContainerRef) { }
 
  @Input() set abracadabra(condition:boolean){
    if(condition){
      this.disparition.createEmbeddedView(this.magie);
    }else{
      this.disparition.clear()
    }

  }
}

