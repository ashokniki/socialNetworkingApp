import { Component, OnInit, Input } from "@angular/core";
import { AnimateChildAst } from "@angular/animations/browser/src/dsl/animation_ast";

@Component({
  selector: "app-image-box",
  templateUrl: "./image-box.component.html",
  styleUrls: ["./image-box.component.css"]
})
export class ImageBoxComponent implements OnInit {
  @Input() imgBox: any;
  constructor() {}

  ngOnInit() {}
}
