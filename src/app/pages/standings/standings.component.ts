import { Component, OnInit } from '@angular/core';
import { StandingsService } from '../../shared/services/standings.service';
import { Pilots } from '../../shared/modellek/Pilot';
import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow, MatRowDef,
  MatTable
} from "@angular/material/table";

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  standalone: true,
  imports: [
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatHeaderRow,
    MatRow,
    MatHeaderRowDef,
    MatRowDef,
    MatCellDef,
    MatHeaderCellDef
  ],
  styleUrls: ['./standings.component.scss']
})
export class StandingsComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'team', 'points'];
  dataSource!: Pilots[];

  constructor(private pilotService: StandingsService) {}

  ngOnInit(): void {
    this.dataSource = this.pilotService.getPilots();
  }
}

