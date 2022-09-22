import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { CometChatTheme, fontHelper, localize } from '@cometchat-pro/angular-ui-kit';
import { CometChatServices } from '../app.service';

@Component({
  selector: 'cometchat-users-wrapper',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public localize:any = localize
  @Input() theme = new CometChatTheme({})
  public logoutIconURL:string="assets/logout.svg";
  public soundIconURL:string="assets/sound-small.png";
  public localizeIconURL:string="assets/localize.png";
  public themeIconURL:string="assets/theme.png";
  public sidebarIconURL:string="assets/sidebar.png";
  public listwrapperIconURL:string="assets/listwrapper.png";
  public listIconURL:string="assets/list.png";
  public conversationIconURL:string="assets/conversation.png";

  constructor(private router: Router,private route: ActivatedRoute,private cometchatService:CometChatServices) { 

  }

  ngOnInit(): void {
  }
  redirect(name:string){
    this.cometchatService.theme = this.theme
      let navigationExtras: NavigationExtras = {
    state: {pageName:name}
};
 
  this.router.navigate(['/users-demo'],navigationExtras);


  }
  // styles
style:any={
  sidebarStyle:()=>{
    return{
      background:this.theme.palette.getSecondary()

    }
  },
  headerTitleStyle:()=>{
    return{
      font: fontHelper(this.theme.typography.heading),
      color:this.theme.palette.getAccent()
    }
  },
  cardTitleStyle:()=>{
    return{
      font: fontHelper(this.theme.typography.title1),
      color:this.theme.palette.getAccent()
    }
  },
  cardStyle:()=>{
    return{
     background:this.theme.palette.getBackground(),
     boxShadow: `${this.theme.palette.getAccent400()} 0px 0px 5px`
    }
  },
  cardDescriptionStyle:()=>{
    return{
      font: fontHelper(this.theme.typography.subtitle2),
      color:this.theme.palette.getAccent600()

    }
  },
  footerStyle:()=>{
    return{
      font: fontHelper(this.theme.typography.subtitle2),
      color:this.theme.palette.getAccent500()

    }
  },
  iconStyle:(icon:string)=>{
    return{
      WebkitMask: `url(${icon}) center center no-repeat`,
      background:this.theme.palette.getAccent() ,
      height:"28px",
      width:"fit-content"

    }
  },
  logoutIoncStyle:()=>{
    return{
      WebkitMask: `url(${this.logoutIconURL}) center center no-repeat`,
      background:"black",
      height:"24px",
      width:"24px"

    }
  },
}

}


