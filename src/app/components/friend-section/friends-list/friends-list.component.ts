import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.css']
})
export class FriendsListComponent implements OnInit {
  @Input() fldata: any;
  constructor() { }

  ngOnInit() {
    console.log("final", this.fldata)
  }

}
