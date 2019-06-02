import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-add-friends-popup",
  templateUrl: "./add-friends-popup.component.html",
  styleUrls: ["./add-friends-popup.component.css"]
})
export class AddFriendsPopupComponent implements OnInit {
  showAddFriendsPopup: false;
  @Output() popupStatus = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}

  closePopup() {
    this.popupStatus.emit("true");
  }
}
