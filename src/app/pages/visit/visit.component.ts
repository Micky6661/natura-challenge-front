import { Component, OnInit, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import { Visit } from './Visit';
declare var $;

@Component({
  selector: 'app-visit',
  templateUrl: './visit.component.html',
  styleUrls: ['./visit.component.css']
})
export class VisitComponent implements OnInit {

  @ViewChild('dataTable') table;
  private dataTable: any;

  visitList: Visit[];

  constructor() { }

  ngOnInit() {

    // this.service.get().subscribe(
    //   patients => this.patientList = patients
    // );

    this.dataTable = $(this.table.nativeElement);
    this.dataTable.DataTable();
  }

  public delete(id: number): void {
    Swal.fire({
      title: 'Are you sure?',
      type: 'error',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'File was deleted.',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'File was not deleted',
          'error'
        )
      }
    })
  }

}
