import { Directive, ElementRef, HostListener, Renderer2, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appScrollAnimation]'
})
export class ScrollAnimationDirective implements AfterViewInit {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    this.evaluateVisability();
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.evaluateVisability();
  }

  evaluateVisability(): void {
    
    
    if (this.isElementInViewport(this.el.nativeElement)) {
      this.renderer.addClass(this.el.nativeElement,'is-visible');
    }
    else if (this.isElementOffBottom(this.el.nativeElement)){
      this.renderer.removeClass(this.el.nativeElement,'is-visible');
    }
  }

  isElementInViewport(element: any): boolean {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.left <= (window.innerWidth || document.documentElement.clientWidth) &&
      rect.bottom >= 0 &&
      rect.right >= 0
    )
  }

  isElementOffBottom(element: any): boolean {
    const rect = element.getBoundingClientRect();
    return rect.top > (window.innerHeight || document.documentElement.clientHeight);
  }
}
