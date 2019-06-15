import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-timeline-section",
  templateUrl: "./timeline-section.component.html",
  styleUrls: ["./timeline-section.component.css"]
})
export class TimelineSectionComponent implements OnInit {
  postSectionData = [
    {
      category: "1",
      userName: "AshokMuthu",
      coverPhoto: "../../assets/images/photo3.jpg",
      likes: [{ thumpsUp: "50" }, { thumpsDown: "2" }],
      publishedTime: "15 mins ago",
      message:
        "hi Guys, This is my first post here.I am really happy to work on this API Integration. I get lot ideas from Siraj master",
      replayMessages: [
        {
          userName: "Siraj",
          description:
            "Hi Ashok,I am really happy to see this. Have to learn more.",
          time: "15 mins ago",
          replaymessageUser: [
            {
              userName: "Vijay",
              coverPhoto: "../../assets/images/photo1.jpg",
              publishedTime: "15 mins ago",
              message:
                "hi Guys, This is my first post here.I am really happy to work."
            },
            {
              userName: "Suresh",
              coverPhoto: "../../assets/images/photo2.jpg",
              publishedTime: "15 mins ago",
              message:
                "hi Guys, This is my first post here.I am really happy to work."
            }
          ]
        },
        {
          userName: "Shankarlal",
          description: "Keep learning thambi.. have to acheive lot here.",
          time: "15 mins ago",
          replaymessageUser: [
            {
              userName: "Vijay",
              coverPhoto: "../../assets/images/photo2.jpg",
              publishedTime: "15 mins ago",
              message:
                "hi Guys, This is my first post here.I am really happy to work."
            },
            {
              userName: "Suresh",
              coverPhoto: "../../assets/images/photo3.jpg",
              publishedTime: "15 mins ago",
              message:
                "hi Guys, This is my first post here.I am really happy to work."
            }
          ]
        }
      ]
    },
    {
      category: "images",
      userName: "Rajkumar",
      coverPhoto:
        "https://newevolutiondesigns.com/images/freebies/hd-wallpaper-1.jpg",
      likes: [{ thumpsUp: "10" }, { thumpsDown: "13" }],
      publishedTime: "15 mins ago",
      message: "hi Guys, This is my first post here.I am really happy to work.",
      replayMessages: [
        {
          userName: "Siraj",
          description:
            "Hi Ashok,I am really happy to see this. Have to learn more.",
          time: "15 mins ago",
          replaymessageUser: [
            {
              userName: "Vijay",
              coverPhoto: "../../assets/images/photo1.jpg",
              publishedTime: "15 mins ago",
              message:
                "hi Guys, This is my first post here.I am really happy to work."
            },
            {
              userName: "Suresh",
              coverPhoto: "../../assets/images/photo3.jpg",
              publishedTime: "15 mins ago",
              message:
                "hi Guys, This is my first post here.I am really happy to work."
            }
          ]
        },
        {
          userName: "Shankarlal",
          description: "Keep learning thambi.. have to acheive lot here.",
          time: "15 mins ago",
          replaymessageUser: [
            {
              userName: "Vijay",
              coverPhoto: "../../assets/images/photo2.jpg",
              publishedTime: "15 mins ago",
              message:
                "hi Guys, This is my first post here.I am really happy to work."
            },
            {
              userName: "Suresh",
              coverPhoto: "../../assets/images/photo1.jpg",
              publishedTime: "15 mins ago",
              message:
                "hi Guys, This is my first post here.I am really happy to work."
            }
          ]
        }
      ]
    },
    {
      category: "images",
      userName: "Siraj",
      coverPhoto: "https://wallpapercave.com/wp/HeLC3lH.jpg",
      likes: [{ thumpsUp: "50" }, { thumpsDown: "2" }],
      publishedTime: "15 mins ago",
      message: "hi Guys, This is my first post here.I am really happy to work.",
      replayMessages: [
        {
          userName: "Siraj",
          description:
            "Hi Ashok,I am really happy to see this. Have to learn more.",
          time: "15 mins ago",
          replaymessageUser: [
            {
              userName: "Vijay",
              coverPhoto: "../../assets/images/photo1.jpg",
              publishedTime: "15 mins ago",
              message:
                "hi Guys, This is my first post here.I am really happy to work."
            },
            {
              userName: "Suresh",
              coverPhoto: "../../assets/images/photo3.jpg",
              publishedTime: "15 mins ago",
              message:
                "hi Guys, This is my first post here.I am really happy to work."
            }
          ]
        },
        {
          userName: "Shankarlal",
          description: "Keep learning thambi.. have to acheive lot here.",
          time: "15 mins ago",
          replaymessageUser: [
            {
              userName: "Siraj",
              coverPhoto: "../../assets/images/photo2.jpg",
              publishedTime: "15 mins ago",
              message:
                "hi Guys, This is my first post here.I am really happy to work."
            },
            {
              userName: "Siraj",
              coverPhoto: "../../assets/images/photo1.jpg",
              publishedTime: "15 mins ago",
              message:
                "hi Guys, This is my first post here.I am really happy to work."
            }
          ]
        }
      ]
    },
    {
      category: "images",
      userName: "Ganesh",
      coverPhoto:
        "https://www.pixelstalk.net/wp-content/uploads/2016/07/Wallpapers-HD-1080P-3D-Download.jpg",
      likes: [{ thumpsUp: "50" }, { thumpsDown: "2" }],
      publishedTime: "15 mins ago",
      message: "hi Guys, This is my first post here.I am really happy to work.",
      replayMessages: [
        {
          userName: "Siraj",
          description:
            "Hi Ashok,I am really happy to see this. Have to learn more.",
          time: "15 mins ago",
          replaymessageUser: [
            {
              userName: "Vijay",
              coverPhoto: "../../assets/images/photo1.jpg",
              publishedTime: "15 mins ago",
              message:
                "hi Guys, This is my first post here.I am really happy to work."
            },
            {
              userName: "Suresh",
              coverPhoto: "../../assets/images/photo2.jpg",
              publishedTime: "15 mins ago",
              message:
                "hi Guys, This is my first post here.I am really happy to work ."
            }
          ]
        },
        {
          userName: "Shankarlal",
          description: "Keep learning thambi.. have to acheive lot here.",
          time: "15 mins ago",
          replaymessageUser: [
            {
              userName: "Siraj",
              coverPhoto: "../../assets/images/photo2.jpg",
              publishedTime: "15 mins ago",
              message:
                "hi Guys, This is my first post here.I am really happy to work."
            },
            {
              userName: "Siraj",
              coverPhoto: "../../assets/images/photo3.jpg",
              publishedTime: "15 mins ago",
              message:
                "hi Guys, This is my first post here.I am really happy to work."
            }
          ]
        }
      ]
    },
    {
      category: 3,
      categoryType: "polls",
      userName: "Ganesh",
      // coverPhoto:
      //   "https://www.pixelstalk.net/wp-content/uploads/2016/07/Wallpapers-HD-1080P-3D-Download.jpg",
      // likes: [{ thumpsUp: "50" }, { thumpsDown: "2" }],
      publishedTime: "15 mins ago",
      questions: "what is different between UI and UX?",
      answersList: [
        {
          answer: "UX is grapic related stuff. UI is something different",
          count: "5"
        },
        {
          answer: "UX is grapic related stuff. UI is something different",
          count: "10"
        },
        {
          answer: "UX is grapic related stuff. UI is something different",
          count: "15"
        }
      ]
    }
  ];

  constructor() {}

  ngOnInit() {
    console.log("test lre");
  }
}
