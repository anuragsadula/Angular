import { Component, OnInit } from '@angular/core';
import { CricketService } from '../cricket.service';
import { ActivatedRoute } from '@angular/router';
import { Player } from '../player';

@Component({
  selector: 'app-view-player',
  templateUrl: './view-player.component.html',
  styleUrls: ['./view-player.component.scss']
})
export class ViewPlayerComponent implements OnInit {

  player: Player = null;
  constructor(private service: CricketService, private route:ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.params.id;
    console.log(id);
    this.getPlayer(id);
  }
  getPlayer(id){
    this.service.getPlayer(id).subscribe((res:any)=>{
      this.player = res.player;
    },err=>{
      console.log(err);
    })
  }
}
