import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderSectionComponent } from "./components/header-section/header-section.component";
import { LayoutComponent } from "./components/layout/layout.component";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { TimelineSectionComponent } from "./components/timeline-section/timeline-section.component";
import { AboutSectionComponent } from "./components/about-section/about-section.component";
import { AlbumSectionComponent } from "./components/album-section/album-section.component";
import { FriendSectionComponent } from "./components/friend-section/friend-section.component";
import { TimeLineLeftComponent } from "./components/timeline-section/time-line-left/time-line-left.component";
import { TimeLineRightComponent } from "./components/timeline-section/time-line-right/time-line-right.component";
import { TimeLineCenterComponent } from "./components/timeline-section/time-line-center/time-line-center.component";
import { FriendsListComponent } from "./components/friend-section/friends-list/friends-list.component";
import { ChatBoxComponent } from "./components/chat-box/chat-box.component";
import { AddFriendsPopupComponent } from "./components/nav-bar/add-friends-popup/add-friends-popup.component";
import { PostSectionComponent } from "./components/timeline-section/time-line-center/post-section/post-section.component";
import { Routes, RouterModule } from '@angular/router';
import { FriendsListSection } from './services/friendsList.services';
import { RegistrationFormComponent } from './components/header-section/registration-form/registration-form.component';
import { LoginFormComponent } from './components/header-section/login-form/login-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { SubCommentsComponent } from './components/timeline-section/time-line-center/sub-comments/sub-comments.component';
import { MainCommentsComponent } from './components/timeline-section/time-line-center/main-comments/main-comments.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderSectionComponent,
    LayoutComponent,
    NavBarComponent,
    TimelineSectionComponent,
    AboutSectionComponent,
    AlbumSectionComponent,
    FriendSectionComponent,
    TimeLineLeftComponent,
    TimeLineRightComponent,
    TimeLineCenterComponent,
    FriendsListComponent,
    ChatBoxComponent,
    AddFriendsPopupComponent,
    PostSectionComponent,
    RegistrationFormComponent,
    LoginFormComponent,
    SubCommentsComponent,
    MainCommentsComponent,
    
  ],
  imports: [BrowserModule, AppRoutingModule , FormsModule, ReactiveFormsModule, BrowserAnimationsModule, ToastrModule.forRoot()],
  providers: [ FriendsListSection],
  bootstrap: [AppComponent]
})
export class AppModule {}
