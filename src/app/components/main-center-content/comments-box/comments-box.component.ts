import { Component, OnInit, Input } from '@angular/core';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';

@Component({
  selector: 'app-comments-box',
  templateUrl: './comments-box.component.html',
  styleUrls: ['./comments-box.component.css']
})
export class CommentsBoxComponent implements OnInit {
  @Input() postCommands;
  public data;
  constructor() { }

  ngOnInit() {
    console.log("@@@@@@@@@@@ ", this.postCommands);
  }

}
