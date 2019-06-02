import { Component, OnInit , Input} from '@angular/core';
import { FriendsListSection } from '../../services/friendsList.services'

@Component({
  selector: 'app-friend-section',
  templateUrl: './friend-section.component.html',
  styleUrls: ['./friend-section.component.css']
})
export class FriendSectionComponent implements OnInit {
  friendsList:any;
 
  constructor(private friendsListSection:FriendsListSection) { }

  ngOnInit() {
    console.log(this.friendsListSection.friendsListArray);
    this.friendsList = this.friendsListSection.friendsListArray;
  }

}
