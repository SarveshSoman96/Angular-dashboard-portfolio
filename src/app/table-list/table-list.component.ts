import { Component, OnInit } from '@angular/core';

export interface SimpleTable {
  Name: string;
  Id: number;
  Country: string;
  City: string;
  Salary: string;
}

const Persons_Data: SimpleTable[] = [
  {Id: 1, Name: 'DAckota Rice', Country: "Niger", City: 'Oud-Turnhout',Salary:"$36.738"},
  {Id: 2, Name: 'Minerva Hooper', Country: 'Curacao', City: 'Sinnai-Waas',Salary:"$23.789"},
  {Id: 3, Name: 'Sage Rodrguez', Country: "Netherland", City: 'Baileux',Salary:"$56.142"},
  {Id: 4, Name: 'Philip Chaney', Country: "Korea, South", City: 'Overland Park',Salary:"$38.735"},
  {Id: 5, Name: 'Doris Green', Country: "Malawi", City: 'Feldkirchen in Karnten',Salary:"$63.542"},
  {Id: 6, Name: 'Mason Porter', Country: "Chile", City: 'Gloucester',Salary:"$78.615"}
];


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}



@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  constructor() { }

 ngOnInit(): void {
  }

  tableColumns: string[] = ['Id', 'Name', 'Country', 'City',"Salary"];
  Persons_Info = Persons_Data;


}
