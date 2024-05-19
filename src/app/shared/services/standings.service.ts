import { Injectable } from '@angular/core';
import { Pilots } from '../modellek/Pilot';

@Injectable({
  providedIn: 'root'
})
export class StandingsService {
  private pilots: Pilots[] = [
    { position: 1, name: "Max Verstappen", team: "Red Bull/Honda RBPT", points: 136 },
    { position: 2, name: "Sergio Pérez", team: "Red Bull/Honda RBPT", points: 103 },
    { position: 3, name: "Charles Leclerc", team: "Ferrari", points: 98 },
    { position: 4, name: "Lando Norris", team: "McLaren/Mercedes", points: 83 },
    { position: 5, name: "Carlos Sainz", team: "Ferrari", points: 83 },
    { position: 6, name: "Oscar Piastri", team: "McLaren/Mercedes", points: 41 },
    { position: 7, name: "George Russell", team: "Mercedes", points: 37 },
    { position: 8, name: "Fernando Alonso", team: "Aston Martin/Mercedes", points: 33 },
    { position: 9, name: "Lewis Hamilton", team: "Mercedes", points: 27 },
    { position: 10, name: "Yuki Tsunoda", team: "RB/Honda RBPT", points: 14 },
    { position: 11, name: "Lance Stroll", team: "Aston Martin/Mercedes", points: 9 },
    { position: 12, name: "Oliver Bearman", team: "Ferrari", points: 6 },
    { position: 13, name: "Nico Hülkenberg", team: "Haas/Ferrari", points: 6 },
    { position: 14, name: "Daniel Ricciardo", team: "RB/Honda RBPT", points: 5 },
    { position: 15, name: "Esteban Ocon", team: "Alpine/Renault", points: 1 },
    { position: 16, name: "Kevin Magnussen", team: "Haas/Ferrari", points: 1 },
    { position: 17, name: "Alexander Albon", team: "Williams/Mercedes", points: 0 },
    { position: 18, name: "Zhou Guanyu", team: "Kick Sauber", points: 0 },
    { position: 19, name: "Pierre Gasly", team: "Alpine/Renault", points: 0 },
    { position: 20, name: "Valtteri Bottas", team: "Kick Sauber", points: 0 },
    { position: 21, name: "Logan Sargeant", team: "Williams/Mercedes", points: 0 }

  ];

  getPilots(): Pilots[] {
    return this.pilots;
  }
}
