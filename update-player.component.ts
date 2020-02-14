import { Component, OnInit } from '@angular/core';
import { CricketService } from '../cricket.service';

@Component({
  selector: 'app-update-player',
  templateUrl: './update-player.component.html',
  styleUrls: ['./update-player.component.scss']
})
export class UpdatePlayerComponent implements OnInit {

  constructor(private service: CricketService) { }

  ngOnInit() {
  }

}
