import { Injectable } from '@angular/core';
import { Teams } from '../modellek/Teams';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor() { }
  private teams: Teams[] = [
    { position: 1, team: "Red Bull/Honda RBPT", points: 239 },
    { position: 2, team: "Ferrari", points: 187 },
    { position: 3, team: "McLaren/Mercedes", points: 124 },
    { position: 4, team: "Mercedes", points: 64 },
    { position: 5, team: "Aston Martin/Mercedes", points: 42 },
    { position: 6, team: "RB/Honda RBPT", points: 19 },
    { position: 7, team: "Haas/Ferrari", points: 7 },
    { position: 8, team: "Alpine/Renault", points: 1 },
    { position: 9, team: "Williams/Mercedes", points: 0 },
    { position: 10, team: "Kick Sauber/Ferrari", points: 0 },
  ];

  getTeams(): Teams[] {
    return this.teams;
  }
}
