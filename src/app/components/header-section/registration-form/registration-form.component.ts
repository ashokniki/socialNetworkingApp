import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  showRegistrationForm: false;
  @Output() hidePopup = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  hideRegistrationForm(){
    this.hidePopup.emit("true");
  }

}
