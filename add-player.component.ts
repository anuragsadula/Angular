import { Component, OnInit } from '@angular/core';
import { CricketService } from '../cricket.service';
import { Player } from '../player';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.scss']
})
export class AddPlayerComponent implements OnInit {

  constructor(private service: CricketService) { }

  player: Player = {
    id : null,
    name : '',
    country : '',
    category : '',
    image :'',
    updatedAt : null,
    createdAt : null
  };

  ngOnInit() {
  
  }

  createPlayer(){
    this.service.createPlayer(this.player).subscribe((res:any)=>{
      console.log(res);
      alert("Created new player successfully!");
    },err=>{
      console.log(err);
      alert("Player creation failed try again.");
      }
    )
  }
}
