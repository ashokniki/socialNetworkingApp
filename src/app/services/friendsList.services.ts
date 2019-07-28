import { Injectable } from '@angular/core';


@Injectable()
export class FriendsListSection {
  public friendsListArray = [
    {
      profileCover: '../../assets/images/1.jpg',
      userPhoto: '../../assets/images/user-3.jpg',
      userName: 'Micheal',
      friendType: [{ type1: 'My Friend' }, { type2: 'Tutor' }, { type3: 'Other' }, { type4: 'Student' }],
      destination: 'Art Director'
    },
    {
      profileCover: '../../assets/images/3.jpg',
      userPhoto: '../../assets/images/user-4.jpg',
      userName: 'Siraj Mohamad',
      friendType: [{ type1: 'My Friend' }, { type2: 'Tutor' }, { type3: 'Other' }, { type4: 'Student' }],
      destination: 'Senior Director'
    },
    {
      profileCover: '../../assets/images/4.jpg',
      userPhoto: '../../assets/images/user-3.jpg',
      userName: 'Rajkumar',
      friendType: [{ type1: 'My Friend' }, { type2: 'Tutor' }, { type3: 'Other' }, { type4: 'Student' }],
      destination: 'Senior Director'
    },
    {
      profileCover: '../../assets/images/5.jpg',
      userPhoto: '../../assets/images/user-7.jpg',
      userName: 'Ashok Muthu',
      friendType: [{ type1: 'My Friend' }, { type2: 'Tutor' }, { type3: 'Other' }, { type4: 'Student' }],
      destination: 'UI/UX Director'
    },
    {
      profileCover: '../../assets/images/6.jpg',
      userPhoto: '../../assets/images/user-8.jpg',
      userName: 'Lenin Franklin',
      friendType: [{ type1: 'My Friend' }, { type2: 'Tutor' }, { type3: 'Other' }, { type4: 'Student' }],
      destination: 'Senior Director'
    },
    {
      profileCover: '../../assets/images/8.jpg',
      userPhoto: '../../assets/images/user-9.jpg',
      userName: 'Siva Karthik',
      friendType: [{ type1: 'My Friend' }, { type2: 'Tutor' }, { type3: 'Other' }, { type4: 'Student' }],
      destination: 'Senior Director'
    },

  ];

  constructor() { }




}
