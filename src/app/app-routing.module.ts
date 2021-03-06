import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TimelineSectionComponent } from "./components/timeline-section/timeline-section.component";
import { AboutSectionComponent } from "./components/about-section/about-section.component";
import { AlbumSectionComponent } from "./components/album-section/album-section.component";
import { LayoutComponent } from "./components/layout/layout.component";
import { FriendSectionComponent } from "./components/friend-section/friend-section.component";
import { NewsFeedComponent } from "./components/main-center-content/news-feed/news-feed.component";
import { MainCenterContentComponent } from './components/main-center-content/main-center-content.component';

const routes: Routes = [
  {
    path: "",
    component: TimelineSectionComponent,
    pathMatch: "full",
    children: [
      // {
      //   // path: '',
      //   // redirectTo: '',
      //   // pathMatch: 'full'
      // },
      // {
      //   path: 'user-level',
      //   component: UserLevelComponent,
      // },
      // {
      //   path: 'group-level',
      //   component: GroupLevelComponent
      // }
    ]
  },
  {
    path: "about-section",
    component: AboutSectionComponent
  },
  {
    path: "album-section",
    component: AlbumSectionComponent
  },
  {
    path: "friend-section",
    component: FriendSectionComponent
  },
  {
    path: "post-section",
    component: MainCenterContentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
