import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr'
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tic-tac-toe';
  winMessage: string="";
  isCross = false;
  task:boolean=true;
  player1Name:string="";
  player2Name:string="";
  playerStatus: boolean = true ;
    itemArray: string[]= new Array(9).fill('empty');
  constructor(private toastr: ToastrService) {}

  handleClick=(itemNumber: number)=>{
    if (this.winMessage) {
      return this.toastr.success(this.winMessage)
    }
    if (!this.playerStatus) {
    if (this.itemArray[itemNumber]==='empty') {
      this.itemArray[itemNumber]= this.isCross ? 'cross' :'circle';
      this.isCross = !this.isCross;
    }
    else{
          return this.toastr.info('Already filled')
        }
      }
      else{
        return this.toastr.error("Enter player Name")
      }
        this.checkIsWinner()
        
  }

  checkIsWinner=()=>{
    if(
      this.itemArray[0]===this.itemArray[1] &&
      this.itemArray[0]!== "empty" &&
      this.itemArray[0]=== this.itemArray[2] 
    ){this.winMessage=`${this.itemArray[0]} has WON`;}
    else if (
      this.itemArray[3]===this.itemArray[4] &&
      this.itemArray[3]!== "empty" &&
      this.itemArray[3]=== this.itemArray[5]
    ){this.winMessage=`${this.itemArray[3]} has WON`;}
    else if (
      this.itemArray[6]===this.itemArray[7] &&
      this.itemArray[6]!== "empty" &&
      this.itemArray[6]=== this.itemArray[8]
    ){this.winMessage=`${this.itemArray[6]} has WON`;}
    else if (
      this.itemArray[0]===this.itemArray[4] &&
      this.itemArray[0]!== "empty" &&
      this.itemArray[0]=== this.itemArray[8]
    ){this.winMessage=`${this.itemArray[0]} has WON`;}
    else if (
      this.itemArray[2]===this.itemArray[4] &&
      this.itemArray[2]!== "empty" &&
      this.itemArray[2]=== this.itemArray[6]
    ){this.winMessage=`${this.itemArray[2]} has WON`;}
    else if (
      this.itemArray[0]===this.itemArray[3] &&
      this.itemArray[0]!== "empty" &&
      this.itemArray[0]=== this.itemArray[6]
    ){this.winMessage=`${this.itemArray[0]} has WON`;}
    else if (
      this.itemArray[1]===this.itemArray[4] &&
      this.itemArray[1]!== "empty" &&
      this.itemArray[1]=== this.itemArray[7]
    ){this.winMessage=`${this.itemArray[1]} has WON`;}
    else if (
      this.itemArray[2]===this.itemArray[5] &&
      this.itemArray[2]!== "empty" &&
      this.itemArray[2]=== this.itemArray[8]
    ){this.winMessage=`${this.itemArray[2]} has WON`;}
    else if(
      this.itemArray[0] !== "empty" &&
      this.itemArray[1] !== "empty" &&
      this.itemArray[2] !== "empty" &&
      this.itemArray[3] !== "empty" &&
      this.itemArray[4] !== "empty" &&
      this.itemArray[5] !== "empty" &&
      this.itemArray[6] !== "empty" &&
      this.itemArray[7] !== "empty" &&
      this.itemArray[8] !== "empty"  ){
      this.winMessage= "Gama is draw try again!";
    }
  }

  ReloadGame=()=>{
    this.winMessage="";
    this.isCross= false;
    this.task=true;
    this.playerStatus=true;
    this.itemArray= new Array(9).fill('empty');
    this.player1Name= "";
    this.player2Name= "";
  }
  onSubmit(f:NgForm){
    const {player1name,player2name} = f.form.value;
    this.player1Name= player1name;
    this.player2Name= player2name;
    this.task=false;
    if (this.player1Name && this.player2Name) {
      this.playerStatus = false;
      return this.toastr.success("start the game")
    } 
    if(this.player1Name === this.player2Name && this.player1Name === null){
      return this.toastr.error(" Both name can not be same")}
      else {
      return this.toastr.error("enter player name")
    }
  }
}
