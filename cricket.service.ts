import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Player } from './player';

@Injectable({
  providedIn: 'root'
})

export class CricketService {
private baseUrl = "http://localhost:3030/cricket/api";  
  constructor(private http: HttpClient) { }
  
  getPlayers () {
    return this.http.get(`${this.baseUrl}/players`);
  }
  getPlayer(id:number){
    return this.http.get(`${this.baseUrl}/players{{id}}`);
  }
  createPlayer(player:Player){
    return this.http.post(`${this.baseUrl}/players`,player);
  }
  deletePlayer(id){
    return this.http.delete(`${this.baseUrl}/players/${id}`);
  }

}