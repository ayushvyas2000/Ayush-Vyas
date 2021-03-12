import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import {gsap} from 'gsap';
@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.scss']
})
export class MyProjectsComponent implements OnInit {

  @ViewChild('myProjects', { static: true }) myProjects: ElementRef<HTMLDivElement>;
 
  constructor(@Inject(DOCUMENT) private document: Document) { 
} 
  
  ngOnInit(): void {
    this.initialAnimations();
  }

  getSocials()
  {
    var overlay=document.getElementById("overlay");
    overlay.style.display="block";
  }
  closeSocials()
  {
    var overlay=document.getElementById("overlay");
    overlay.style.display="none";
  }

  initialAnimations(): void
  {
    gsap.from(this.myProjects.nativeElement.childNodes,{
      duration:0.7,
      opacity: 0,
      y:-20,
      stagger:0.2,
      delay: 0.5,
    }
    )
  }
}
