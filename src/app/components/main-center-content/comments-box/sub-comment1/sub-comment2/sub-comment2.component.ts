import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sub-comment2',
  templateUrl: './sub-comment2.component.html',
  styleUrls: ['./sub-comment2.component.css']
})
export class SubComment2Component implements OnInit {
  @Input() lastLevel;
  constructor() { }

  ngOnInit() {
    console.log("last level compnents",this.lastLevel);
  }

}
