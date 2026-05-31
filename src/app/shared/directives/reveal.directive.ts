import { Directive, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[srwReveal]',
  standalone: true,
  host: { class: 'reveal' },
})
export class RevealDirective implements OnInit, OnDestroy {
  @Input() revealDelay = 0;
  @Input() revealFrom: 'default' | 'right' = 'default';

  private observer?: IntersectionObserver;

  constructor(private el: ElementRef<HTMLElement>) {}

  ngOnInit() {
    const el = this.el.nativeElement;
    if (this.revealFrom === 'right') el.classList.add('reveal--right');

    this.observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      setTimeout(() => el.classList.add('revealed'), this.revealDelay);
      this.observer!.unobserve(el);
    }, { threshold: 0.08 });

    this.observer.observe(el);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
