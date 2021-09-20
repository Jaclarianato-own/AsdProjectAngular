import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { Persona } from './persona';
import { Rest } from 'src/app/services/rest.service';


@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {
  public displayedColumns: string[] = ['id_documento', 'nombre'];
  public personas: MatTableDataSource<Persona>;

  defaultPageIndex: number = 0;
  defaultPageSize: number = 10;
  public defaultSortColumn: string = "name";
  public defaultSortOrder: string = "asc";

  defaultFilterColumn: string = "name";
  filterQuery: string = null;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private rest: Rest
  ){

  }

  ngOnInit() {
    this.loadData(null);
  }

  loadData(query: string = null) {

    if (query) {
        this.filterQuery = query;
    }
    this.getData();
  }

  getData() {

    var url: string = "/api/persona/obtenerPersonas";
    this.rest.request(url).subscribe(respuesta => {

      this.personas = new MatTableDataSource<Persona>(respuesta);

  });
}
  
}

