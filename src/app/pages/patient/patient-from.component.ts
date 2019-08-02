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

    public async submitSave(): Promise<void> {
        await this.service.insert(this.patient).toPromise().then(
            function (ok) {
                Swal.fire('Saved', 'Record saved successfully', 'success');
            }, function (error) {
                Swal.fire('Error', 'Error was ocurred while insert. ' + error, 'error');
            }
        );
        this.router.navigate(['/patient']);
    }

    public async submitEdit(): Promise<void> {
        await this.service.update(this.patient).toPromise().then(
            function (ok) {
                Swal.fire('Updated', 'Record updated successfully', 'success');
            }, function (error) {
                Swal.fire('Error', 'Error was ocurred while insert. ' + error, 'error');
            }
        );
        this.router.navigate(['/patient']);
    }

}
