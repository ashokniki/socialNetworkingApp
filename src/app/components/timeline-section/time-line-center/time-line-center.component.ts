import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-time-line-center",
  templateUrl: "./time-line-center.component.html",
  styleUrls: ["./time-line-center.component.css"]
})
export class TimeLineCenterComponent implements OnInit {
  @Input() getSectionData: any;
  constructor() {}

  ngOnInit() {
    console.log(this.getSectionData);
  }

  myCenterSection() {
    // console.log(this.getSectionData);
  }
}
