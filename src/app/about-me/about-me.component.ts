import { DOCUMENT } from '@angular/common';
import {gsap} from 'gsap';
import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  @ViewChild('aboutMe', { static: true }) aboutMe: ElementRef<HTMLDivElement>;
 
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
    gsap.from(this.aboutMe.nativeElement.childNodes,{
      duration:0.7,
      opacity: 0,
      y:-20,
      stagger:0.2,
      delay: 0.5,
    }
    )
}
}