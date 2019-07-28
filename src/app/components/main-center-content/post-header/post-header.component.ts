import { Component, OnInit, Input } from '@angular/core';
import { AnimateChildAst } from '@angular/animations/browser/src/dsl/animation_ast';
import { newsServices } from '../../../services/fireBaseNews.service';

@Component({
  selector: 'app-post-header',
  templateUrl: './post-header.component.html',
  styleUrls: ['./post-header.component.css']
})
export class PostHeaderComponent implements OnInit {
  @Input() headerPost;
  public data: any;
  imgTag: any;
  title: any;
  constructor(
    private service: newsServices,
  ) {
    this.service.onlyObservable().subscribe((imgUrl: string) => {
      this.imgTag = imgUrl;
      console.log('image testing', this.imgTag);
    });
  }
  ngOnInit() {
    this.data = this.headerPost;
    console.log('post header ', this.data);
    // this.profilePhoto(hai);
  }

  profilePhoto(hai) {
    console.log('user id console', this.data.userId, hai);

    if (this.data.userId == '10') {
      console.log('myprofilePhoto @@@@@@@@@@ ', this.service.myprofilepick);
      return this.service.myprofilepick;
    } else {
      console.log('image1 @@@@@@@@@@ ', this.data);
      return "https://cdn.i-scmp.com/sites/default/files/styles/1200x800/public/d8/images/methode/2019/06/12/2094a6b6-8cc6-11e9-b2aa-5ba392ab87ab_image_hires_162019.jpg?itok=rskMiqlS&v=1560327624";
    }
  }

  myobservable() {
    this.service.profilePhotoObservable().subscribe((img: string) => {
      this.title = img;
      // if (this.data.userId == '10') {
      //   console.log('myprofilePhoto @@@@@@@@@@ ', this.service.myprofilepick);
      //   return this.service.myprofilepick;
      // } else {
      //   console.log('image1 @@@@@@@@@@ ', this.data);
      //   return "https://cdn.i-scmp.com/sites/default/files/styles/1200x800/public/d8/images/methode/2019/06/12/2094a6b6-8cc6-11e9-b2aa-5ba392ab87ab_image_hires_162019.jpg?itok=rskMiqlS&v=1560327624";
      // }
      this.profilePhoto('hai');
    });
  }



}
