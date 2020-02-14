import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { CricketService } from '../cricket.service';
 
@Component({
  selector: 'app-delete',
  templateUrl: './delete-player.component.html',
  styleUrls: ['./delete-player.component.scss']
})
export class DeletePlayerComponent implements OnInit {
  
  playerList: Player[] = [];
 
  constructor(private service: CricketService) { }
 
  ngOnInit() {
    console.log('hello');
    this.getPlayers();
  }
getPlayers(){
  this.service.getPlayers().subscribe((res: any) => {
    this.playerList = res.players;
    console.log(this.playerList);
  }, err => {
    console.log(err);
  })
}
  deletePlayer(id) {
    console.log(id);
    this.service.deletePlayer(id).subscribe((res: any) => {
      alert('Player Deleted');
    }, err => {
      alert('Delete Failed');
    })
  }
}