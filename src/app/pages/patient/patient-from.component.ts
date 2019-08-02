import { Component, OnInit } from '@angular/core';
import { PatientService } from './patient.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from './Patient';
import Swal from 'sweetalert2';


@Component({
    selector: 'app-patient-form',
    templateUrl: './patient-form.component.html',
    styleUrls: ['./patient-form.component.css']
})
export class PatientFormComponent implements OnInit {

    title: string;
    isEdit: boolean;
    patient: Patient;

    constructor(private router: Router, private service: PatientService, private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        this.getbyId();
    }

    public getbyId() {
        this.activatedRoute.params.subscribe(params => {
            if (params.pacientId) {
                this.title = 'Edit Patient';
                this.service.getById(params.pacientId).subscribe(
                    (data) => this.patient = data
                );
                this.isEdit = true;
            } else {
                this.title = 'Create Patient';
                this.patient = new Patient();
            }
        });
    }

    public submitSave(): void {
        this.service.insert(this.patient);
        Swal.fire('Saved', 'Record saved successfully', 'success');
    }

    public submitEdit(): void {
        this.service.update(this.patient);
        Swal.fire('Updated', 'Record updated successfully', 'success');
    }

}
