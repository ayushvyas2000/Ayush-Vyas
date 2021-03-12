import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
@ViewChild('navigation', { static: true }) navigation: ElementRef<HTMLDivElement>;
constructor(@Inject(DOCUMENT) private document:Document){}

ngOnInit(){
this.initialAnimations();
}

initialAnimations(): void
{
  gsap.from(this.navigation.nativeElement.childNodes,{
    duration:0.7,
    opacity: 0,
    y:-20,
    stagger:0.2,
    delay: 0.5,
  }
  );
}
}
