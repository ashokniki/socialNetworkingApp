import { Component, OnInit, Input, OnChanges } from "@angular/core";

@Component({
  selector: "app-polling-section",
  templateUrl: "./polling-section.component.html",
  styleUrls: ["./polling-section.component.css"]
})
export class PollingSectionComponent implements OnInit, OnChanges {
  @Input() pollContent: any;
  constructor() {}

  ngOnInit() {}

  ngOnChanges() {
    console.log("polling", this.pollContent);
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
