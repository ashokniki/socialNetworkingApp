import { Component, OnInit, Input, OnChanges } from "@angular/core";

@Component({
  selector: "app-main-comments",
  templateUrl: "./main-comments.component.html",
  styleUrls: ["./main-comments.component.css"]
})
export class MainCommentsComponent implements OnInit, OnChanges {
  @Input() mainfeedback: any;
  constructor() {}

  ngOnInit() {}
  ngOnChanges() {
    console.log("@input", this.mainfeedback);
  }
}
