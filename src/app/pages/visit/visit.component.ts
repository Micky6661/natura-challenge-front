import { Component, OnInit, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import { Visit } from './Visit';
import { VisitService } from './visit.service';

@Component({
  selector: 'app-visit',
  templateUrl: './visit.component.html',
  styleUrls: ['./visit.component.css']
})
export class VisitComponent implements OnInit {

  columnDefs = [
    { headerName: 'Select', field: 'select', sortable: true, checkboxSelection: true },
    { headerName: 'Patient Name', field: 'pacient.name', sortable: true, filter: true },
    { headerName: 'Patient Last Name', field: 'pacient.lastName', sortable: true, filter: true },
    { headerName: 'Pressure', field: 'bloodPressure', sortable: true, filter: true },
    { headerName: 'Heart Rate', field: 'heartRate', sortable: true, filter: true },
    { headerName: 'Heart Rate', field: 'visitDate', sortable: true, filter: true }
  ];

  rowData: Visit[];
  selectedRow: Visit;

  constructor(private service: VisitService) { }

  ngOnInit() {
    this.service.get().subscribe(
      data => this.rowData = data
    );
  }

  public onRowSelected(event: any) {
    this.selectedRow = event.data;
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
        this.service.delete(this.selectedRow.visitId);
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
