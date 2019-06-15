import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-type-content',
  templateUrl: './post-type-content.component.html',
  styleUrls: ['./post-type-content.component.css']
})
export class PostTypeContentComponent implements OnInit {
@Input() contentType;
  constructor() { }

  ngOnInit() {
  }

}
