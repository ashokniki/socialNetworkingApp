import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-type-poll',
  templateUrl: './post-type-poll.component.html',
  styleUrls: ['./post-type-poll.component.css']
})
export class PostTypePollComponent implements OnInit {
  @Input() pollType
  constructor() { }

  ngOnInit() {
    console.log("polling content" , this.pollType);
  }

  colorChange(ashok) {
    if (ashok == 5) {
      return "red";
    }
    if (ashok == 10) {
      return "blue";
    }
    if (ashok == 15) {
      return "green";
    }
  }
}
