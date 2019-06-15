import { Component, OnInit, Input, OnChanges } from "@angular/core";

@Component({
  selector: "app-content-box",
  templateUrl: "./content-box.component.html",
  styleUrls: ["./content-box.component.css"]
})
export class ContentBoxComponent implements OnInit, OnChanges {
  @Input() contentBox;
  constructor() {}

  ngOnInit() {}
  ngOnChanges() {
    console.log("contentChanges", this.contentBox);
  }
}
