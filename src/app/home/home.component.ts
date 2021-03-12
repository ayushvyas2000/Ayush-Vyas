import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('hero', { static: true }) hero: ElementRef<HTMLDivElement>;
  @ViewChild('clickables',{static: true}) clickables: ElementRef<HTMLDivElement>;
  @ViewChild('footer',{static: true}) footer: ElementRef<HTMLDivElement>;
 
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
    gsap.from(this.hero.nativeElement.childNodes,{
      duration:0.7,
      opacity: 0,
      y:-20,
      stagger:0.2,
      delay: 0.5,
    }
    );
    gsap.from(this.clickables.nativeElement.childNodes,{
      duration:0.7,
      opacity: 0,
      y:-20,
      stagger:0.2,
      delay: 0.5,
    }
    );
    gsap.from(this.footer.nativeElement.childNodes,{
      duration:0.7,
      opacity: 0,
      y:-20,
      stagger:0.2,
      delay: 0.5,
    }
    )
  }
}
