import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-header-section",
  templateUrl: "./header-section.component.html",
  styleUrls: ["./header-section.component.css"]
})
export class HeaderSectionComponent implements OnInit {
  @Input() myStudents: any;
  myName;
  showRegistrationForm;
  constructor() {}

  ngOnInit() {}

  studentsList() {
    this.myName = this.myStudents.studentName;
    console.log(this.myStudents);
  }

  registrationForm(){
    this.showRegistrationForm = true;
  }
}
