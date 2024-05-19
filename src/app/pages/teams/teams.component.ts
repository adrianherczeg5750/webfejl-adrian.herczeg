import { Component, OnInit } from '@angular/core';
import { Teams } from 'src/app/shared/modellek/Teams';
import { TeamsService } from 'src/app/shared/services/teams.service';
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
  selector: 'app-teams',
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
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.scss'
})
export class TeamsComponent implements OnInit{
  displayedColumns: string[] = ['position', 'team', 'points'];
  dataSource!: Teams[];

  constructor(private teamService: TeamsService) {}

  ngOnInit(): void {
    this.dataSource = this.teamService.getTeams();
  }
}
