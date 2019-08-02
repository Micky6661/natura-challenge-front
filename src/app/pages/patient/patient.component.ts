import { Component, OnInit } from '@angular/core';
import { PatientService } from './patient.service';
import Swal from 'sweetalert2';
import { Patient } from './Patient';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  columnDefs = [
    { headerName: 'Select', field: 'select', sortable: true, checkboxSelection: true },
    { headerName: 'Name', field: 'name', sortable: true, filter: true },
    { headerName: 'Last Name', field: 'lastName', sortable: true, filter: true },
    { headerName: 'Age', field: 'age', sortable: true, filter: true }
  ];

  rowData: Patient[];
  selectedRow: Patient;

  constructor(private service: PatientService) { }

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
