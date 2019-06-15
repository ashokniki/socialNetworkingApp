import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-type-image',
  templateUrl: './post-type-image.component.html',
  styleUrls: ['./post-type-image.component.css']
})
export class PostTypeImageComponent implements OnInit {
@Input() imageType;
  constructor() { }

  ngOnInit() {
  }

}
