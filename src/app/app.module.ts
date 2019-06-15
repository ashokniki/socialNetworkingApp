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
import { Routes, RouterModule } from "@angular/router";

import { RegistrationFormComponent } from "./components/header-section/registration-form/registration-form.component";
import { LoginFormComponent } from "./components/header-section/login-form/login-form.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from "ngx-toastr";
import { SubCommentsComponent } from "./components/timeline-section/time-line-center/sub-comments/sub-comments.component";
import { MainCommentsComponent } from "./components/timeline-section/time-line-center/main-comments/main-comments.component";
import { ContentBoxComponent } from "./components/timeline-section/time-line-center/content-box/content-box.component";
import { ImageBoxComponent } from "./components/timeline-section/time-line-center/image-box/image-box.component";
import { PollingSectionComponent } from "./components/timeline-section/time-line-center/polling-section/polling-section.component";
import { NewsFeedComponent } from "./components/main-center-content/news-feed/news-feed.component";

// Services
import { FriendsListSection } from "./services/friendsList.services";
import { newsFeedSection } from "./services/newsFeed.service";
import { TypeContentComponent } from './components/main-center-content/news-feed/type-content/type-content.component';
import { TypeImageComponent } from './components/main-center-content/news-feed/type-image/type-image.component';
import { TypePollComponent } from './components/main-center-content/news-feed/type-poll/type-poll.component';
import { MainCenterContentComponent } from './components/main-center-content/main-center-content.component';
import { PostHeaderComponent } from './components/main-center-content/post-header/post-header.component';
import { CommentSectionComponent } from './components/main-center-content/comment-section/comment-section.component';
import { PostTypeComponent } from './components/main-center-content/post-type/post-type.component';
import { PostTypeImageComponent } from './components/main-center-content/post-type/post-type-image/post-type-image.component';
import { PostTypeContentComponent } from './components/main-center-content/post-type/post-type-content/post-type-content.component';
import { PostTypePollComponent } from './components/main-center-content/post-type/post-type-poll/post-type-poll.component';
import { CommentsBoxComponent } from './components/main-center-content/comments-box/comments-box.component';
import { SubComment2Component } from './components/main-center-content/comments-box/sub-comment1/sub-comment2/sub-comment2.component';
import { SubComment1Component } from './components/main-center-content/comments-box/sub-comment1/sub-comment1.component';

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
    ImageBoxComponent,
    ContentBoxComponent,
    PollingSectionComponent,
    NewsFeedComponent,
    TypeContentComponent,
    TypeImageComponent,
    TypePollComponent,
    MainCenterContentComponent,
    PostHeaderComponent,
    CommentSectionComponent,
    PostTypeComponent,
    PostTypeImageComponent,
    PostTypeContentComponent,
    PostTypePollComponent,
    CommentsBoxComponent,
    SubComment1Component,
    SubComment2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [FriendsListSection, newsFeedSection],
  bootstrap: [AppComponent]
})
export class AppModule {}
