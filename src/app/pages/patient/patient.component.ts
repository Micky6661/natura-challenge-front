import { Component, OnInit } from '@angular/core';
import { PatientService } from './patient.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {

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
