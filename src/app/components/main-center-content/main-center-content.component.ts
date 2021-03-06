import { Component, OnInit } from '@angular/core';
// import { newsFeedSection } from "../../services/newsFeed.service";
import { newsServices } from '../../services/fireBaseNews.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-main-center-content',
  templateUrl: './main-center-content.component.html',
  styleUrls: ['./main-center-content.component.css']
})
export class MainCenterContentComponent implements OnInit {
  data: any;
  postCallFromGroup: FormGroup;
  imgTag: any;
  constructor(
    // private NewsFeedSection: newsFeedSection,
    private news: newsServices,
    private fb: FormBuilder,
  ) {

    this.postCallFromGroup = this.fb.group({
      'postCalltextArea': ['', Validators.required],
    });
  }

  ngOnInit() {
    // this.data = this.NewsFeedSection.newsFeedArray;
    // console.log("newsContebt", this.data);
    // this.dataBreakUp(this.data);
    this.getNewSection();
  }
  ngOnChanges() {
    // this.dataBreakUp("data");
  }

  getNewSection() {
    this.news.getNewSection().subscribe(data => {
      console.log('my data', data);
      this.data = data;
    });
  }


  postNewSection() {
    this.news.postNewSection().subscribe(data => {
      console.log('my data', data);
      this.data = data;
    });
  }

  dataBreakUp(element) {
    switch (element.category) {
      case '1': {
        console.log('category 1');
        return 1;
      }

      case '2': {
        console.log('category 2');
        return 2;
      }

      case 3: {
        console.log('category 3');
        return 3;
      }

      default: {
        console.log('Invalid choice');
        return 0;
      }
    }
  }


}
