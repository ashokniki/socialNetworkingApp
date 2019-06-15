import { Component, OnInit, Input } from '@angular/core';
import { AnimateChildAst } from '@angular/animations/browser/src/dsl/animation_ast';

@Component({
  selector: 'app-post-header',
  templateUrl: './post-header.component.html',
  styleUrls: ['./post-header.component.css']
})
export class PostHeaderComponent implements OnInit {
  @Input() headerPost;
  public data:any;
  constructor() { }

  ngOnInit() {
    this.data = this.headerPost;
    console.log('post header ' , this.data)
  }

}
