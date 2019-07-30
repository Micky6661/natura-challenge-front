import { Component, OnInit, ViewChild } from '@angular/core';
import { Patient } from './Patient';
declare var $;

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  @ViewChild('dataTable') table;
  private dataTable: any;

  patientList: Patient[];

  constructor() { }

  ngOnInit() {

    // this.service.get().subscribe(
    //   patients => this.patientList = patients
    // );

    this.dataTable = $(this.table.nativeElement);
    this.dataTable.DataTable();
  }

}
