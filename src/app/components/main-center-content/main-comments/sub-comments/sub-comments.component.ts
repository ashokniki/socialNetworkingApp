import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-sub-comments",
  templateUrl: "./sub-comments.component.html",
  styleUrls: ["./sub-comments.component.css"]
})
export class SubCommentsComponent implements OnInit {
  @Input() secondLevel: any;
  constructor() {}

  ngOnInit() {}
}
