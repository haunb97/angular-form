import {AfterContentInit, Component, ContentChildren, OnInit, QueryList, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-img-slider',
  templateUrl: './img-slider.component.html',
  styleUrls: ['./img-slider.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class ImgSliderComponent implements OnInit, AfterContentInit {
  @ContentChildren(ImgSliderComponent) slides: QueryList<ImgSliderComponent>;
  component;
  aciveIndex = 0;
  constructor() { }

  ngOnInit() {
  }
  ngAfterContentInit(): void {
    console.log(this.slides);
    this.component = this.slides.first;
  }
  previos() {
    if (this.aciveIndex > 0) {
      this.aciveIndex--;
    }
    this.component = this.slides.toArray()[this.aciveIndex];
  }
  next() {
    if (this.aciveIndex < this.slides.length - 1) {
      this.aciveIndex++;
    }
    this.component = this.slides.toArray()[this.aciveIndex];
  }

}
