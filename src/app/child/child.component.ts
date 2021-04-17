import { Component,OnInit } from '@angular/core';



@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
title:string='Ma liste de film à voir'
showmovies:boolean = true; 

  constructor() { }

  ngOnInit(): void {
  }



}
