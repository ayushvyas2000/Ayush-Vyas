import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import {gsap} from 'gsap';
@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss']
})
export class MySkillsComponent implements OnInit {

  @ViewChild('mySkills', { static: true }) mySkills: ElementRef<HTMLDivElement>;
 
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
    gsap.from(this.mySkills.nativeElement.childNodes,{
      duration:0.7,
      opacity: 0,
      y:-20,
      stagger:0.2,
      delay: 0.5,
    }
    )
  }
}
