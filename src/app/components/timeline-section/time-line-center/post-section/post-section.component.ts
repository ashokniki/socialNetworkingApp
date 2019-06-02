import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-post-section',
  templateUrl: './post-section.component.html',
  styleUrls: ['./post-section.component.css']
})
export class PostSectionComponent implements OnInit {
  formPublishContent : FormGroup;
  constructor(private formBuilder: FormBuilder, private toastr: ToastrService) {}
  getPostValue: any;
  ngOnInit() {
    this.createPublishContent();
    console.log("formcontent", this.formPublishContent);
    console.log("getopostValud", this.getPostValue);
  }

  createPublishContent(){
    this.formPublishContent = this.formBuilder.group({
      contentSection: [null, [Validators.required]],
    });
    return this.formPublishContent;
  }

  getPublishContent(){
      if(this.formPublishContent){
        return this.formPublishContent;
      }else{
        return this.createPublishContent();
      }
  }

  submitForm(){
    if (this.formPublishContent.status == "VALID"){
       this.getPostValue =  this.formPublishContent.value.contentSection;
       console.log(this.formPublishContent.value.contentSection);
       this.toastr.success("Your Content has been posted below", "SUCCESS");
    }else {
      this.toastr.error("Kindly post your content", "ERROR");
        
    }
  }

  // submitForm(){
  //   if (this.formPublishContent.status == "VALID"){
      
  //   }else {

  //   }
  // }

}
