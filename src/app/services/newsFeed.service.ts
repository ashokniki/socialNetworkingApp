import { Injectable } from '@angular/core';

@Injectable()
export class newsFeedSection {
  newsFeedArray = [
    {
      userId: '10',
      category: '1',
      userName: 'AshokMuthu',
      coverPhoto: '../../assets/images/photo3.jpg',
      likes: [{ thumpsUp: '50' }, { thumpsDown: '2' }],
      publishedTime: '15 mins ago',
      message:
        'hi Guys, This is my first post here.I am really happy to work on this API Integration. I get lot ideas from Siraj master',
      replayMessages: [
        {
          userId: '20',
          userName: 'Siraj',
          description:
            'Hi Ashok,I am really happy to see this. Have to learn more.',
          time: '15 mins ago',
          replaymessageUser: [
            {
              userId: '10',
              userName: 'ashokMuthu',
              coverPhoto: '../../assets/images/photo1.jpg',
              publishedTime: '15 mins ago',
              message:
                'hi Guys, This is my first post here.I am really happy to work.',
              replaylastUser: [
                {
                  userName: 'LastUser',
                  coverPhoto: '../../assets/images/photo1.jpg',
                  publishedTime: '15 mins ago',
                  message:
                    'hi Guys, This is my first post here.I am really happy to work.'
                }
              ]
            },
            {
              userId: '10',
              userName: 'ashokMuthu',
              coverPhoto: '../../assets/images/photo2.jpg',
              publishedTime: '15 mins ago',
              message:
                'hi Guys, This is my first post here.I am really happy to work.',
              replaylastUser: [
                {
                  userName: 'Vijay',
                  coverPhoto: '../../assets/images/photo1.jpg',
                  publishedTime: '15 mins ago',
                  message:
                    'hi Guys, This is my first post here.I am really happy to work.'
                }
              ]
            }
          ]
        },
        {
          userName: 'Shankarlal',
          description: 'Keep learning thambi.. have to acheive lot here.',
          time: '15 mins ago',
          replaymessageUser: [
            {
              userId: '10',
              userName: 'AshokMuthu',
              coverPhoto: '../../assets/images/photo2.jpg',
              publishedTime: '15 mins ago',
              message:
                'hi Guys, This is my first post here.I am really happy to work.',
              replaylastUser: [
                {
                  userName: 'Vijay',
                  coverPhoto: '../../assets/images/photo1.jpg',
                  publishedTime: '15 mins ago',
                  message:
                    'hi Guys, This is my first post here.I am really happy to work.',
                  replaylastUser: [
                    {
                      userName: 'Vijay',
                      coverPhoto: '../../assets/images/photo1.jpg',
                      publishedTime: '15 mins ago',
                      message:
                        'hi Guys, This is my first post here.I am really happy to work.'
                    }
                  ]
                }
              ]
            },
            {
              userName: 'Suresh',
              coverPhoto: '../../assets/images/photo3.jpg',
              publishedTime: '15 mins ago',
              message:
                'hi Guys, This is my first post here.I am really happy to work.'
            }
          ]
        }
      ]
    },
    {
      userId: '20',
      category: '2',
      categoryType: 'text',
      userName: 'Siraj',
      postContent:
        'Lorem ipsume is teh donet Lorem ipsume is teh donet Lorem ipsume is tehem ipsume is teh donet ',
      likes: [{ thumpsUp: '50' }, { thumpsDown: '2' }],
      publishedTime: '15 mins ago',
      message: 'hi Guys, This is my first post here.I am really happy to work.',
      replayMessages: [
        {
          userName: 'Siraj',
          description:
            'Hi Ashok,I am really happy to see this. Have to learn more.',
          time: '15 mins ago',
          replaymessageUser: [
            {
              userId: '20',
              userName: 'Siraj',
              coverPhoto: '../../assets/images/photo1.jpg',
              publishedTime: '15 mins ago',
              message:
                'hi Guys, This is my first post here.I am really happy to work.'
            },
            {
              userId: '10',
              userName: 'AshokMuthu',
              coverPhoto: '../../assets/images/photo3.jpg',
              publishedTime: '15 mins ago',
              message:
                'hi Guys, This is my first post here.I am really happy to work.'
            }
          ]
        },
        {
          userName: 'Shankarlal',
          description: 'Keep learning thambi.. have to acheive lot here.',
          time: '15 mins ago',
          replaymessageUser: [
            {
              userId: '20',
              userName: 'Siraj',
              coverPhoto: '../../assets/images/photo2.jpg',
              publishedTime: '15 mins ago',
              message:
                'hi Guys, This is my first post here.I am really happy to work.'
            },
            {
              userId: '20',
              userName: 'Siraj',
              coverPhoto: '../../assets/images/photo1.jpg',
              publishedTime: '15 mins ago',
              message:
                'hi Guys, This is my first post here.I am really happy to work.'
            }
          ]
        }
      ]
    },

    {
      category: 3,
      categoryType: 'polls',
      userName: 'Ganesh',
      publishedTime: '15 mins ago',
      questions: 'what is different between UI and UX?',
      answersList: [
        {
          answer: 'UX is grapic related stuff. UI is something different',
          count: '5'
        },
        {
          answer: 'UX is grapic related stuff. UI is something different',
          count: '10'
        },
        {
          answer: 'UX is grapic related stuff. UI is something different',
          count: '15'
        }
      ]
    }
  ];

  constructor() { }
}
