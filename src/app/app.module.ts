import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CometChatAvatar, CometChatBackdrop, CometChatBadgeCount, CometChatConversation, CometChatConversationList, CometChatConversationListItem, CometChatConversationsWithMessages, CometChatDataItem, CometChatGroupList, CometChatGroups, CometChatGroupsWithMessages, CometChatMessageComposer, CometChatMessageHeader, CometChatMessageList, CometChatMessageReceipt, CometChatMessages, CometChatStatusIndicator, CometChatThemeWrapper, CometChatUserList, CometChatUsers, CometChatUsersWithMessages } from '@cometchat-pro/angular-ui-kit';
import { HomeComponent } from './home/home.component';
import { SharedComponent } from './shared/shared.component';
import { ChatsComponent } from './chats/chats.component';
import { UsersComponent } from './users/users.component';
import { GroupsComponent } from './groups/groups.component';
import { MessagesComponent } from './messages/messages.component';
import { RouterModule } from '@angular/router';
import { CometChatThemeDemoComponent } from './shared/cometchat-theme-demo/cometchat-theme-demo.component';
import { CometChatLocalizeDemoComponent } from './shared/cometchat-localize-demo/cometchat-localize-demo.component';
import { CometChatSoundManagerDemoComponent } from './shared/cometchat-sound-manager-demo/cometchat-sound-manager-demo.component';
import { CometChatDataItemDemoComponent } from './shared/cometchat-data-item-demo/cometchat-data-item-demo.component';
import { CometChatConversationListItemDemoComponent } from './shared/cometchat-conversation-list-item-demo/cometchat-conversation-list-item-demo.component';
import { CometChatMessageReceiptDemoComponent } from './shared/cometchat-message-receipt-demo/cometchat-message-receipt-demo.component';
import { CometChatAvatarDemoComponent } from './shared/cometchat-avatar-demo/cometchat-avatar-demo.component';
import { CometChatBadgeCountComponent } from './shared/cometchat-badge-count-demo/cometchat-badge-count-demo.component';
import { CometChatStatusIndicatorDemoComponent } from './shared/cometchat-status-indicator-demo/cometchat-status-indicator-demo.component';
import { ChatsDemoComponent } from './chats/chats-demo/chats-demo.component';
import { MessagesDemoComponent } from './messages/messages-demo/messages-demo.component';
import { GroupsDemoComponent } from './groups/groups-demo/groups-demo.component';
import { UsersDemoComponent } from './users/users-demo/users-demo.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    HomeComponent,
    SharedComponent,
    ChatsComponent,
    UsersComponent,
    GroupsComponent,
    MessagesComponent,
    CometChatThemeDemoComponent,
    CometChatLocalizeDemoComponent,
    CometChatSoundManagerDemoComponent,
    CometChatDataItemDemoComponent,
    CometChatConversationListItemDemoComponent,
    CometChatMessageReceiptDemoComponent,
    CometChatAvatarDemoComponent,
    CometChatBadgeCountComponent,
    CometChatStatusIndicatorDemoComponent,
    ChatsDemoComponent,
    MessagesDemoComponent,
    GroupsDemoComponent,
    UsersDemoComponent,
    
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CometChatAvatar,
    CometChatBadgeCount,
    CometChatDataItem,
    BrowserAnimationsModule,
    CometChatConversationListItem,
    CometChatConversationsWithMessages,
    CometChatConversation,
    CometChatUsersWithMessages,
    CometChatUserList,
    CometChatUsers,
    CometChatGroups,
    CometChatGroupsWithMessages,
    CometChatGroupList,
    CometChatMessages,
    CometChatMessageList,
    CometChatMessageHeader,
    CometChatMessageComposer,
    CometChatThemeWrapper,
    CometChatConversationList,
    CometChatConversationListItem,
    CometChatStatusIndicator,
    CometChatBackdrop,
    CometChatMessageReceipt,


    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
