import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Patient } from '../patient/Patient';
import { VisitService } from './visit.service';
import { PatientService } from '../patient/patient.service';
import { Visit } from './Visit';


@Component({
    selector: 'app-visit-form',
    templateUrl: './visit-form.component.html',
    styleUrls: ['./visit-form.component.css']
})

export class VisitFormComponent implements OnInit {

    title: string;
    isEdit: boolean;
    patients: Patient[];
    visit: Visit;

    constructor(
        private router: Router,
        private service: VisitService,
        private pService: PatientService,
        private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        this.pService.get().subscribe(
            data => this.patients = data
        );
        this.getbyId();
    }

    public getbyId() {
        this.activatedRoute.params.subscribe(params => {
            if (params.visitId) {
                this.title = 'Edit Visit';
                this.service.getById(params.visitId).subscribe(
                    (data) => this.visit = data
                );

                this.isEdit = true;
            } else {
                this.title = 'Create Visit';
                this.visit = new Visit();
                this.visit.visitDate = new Date();
            }
        });
    }

    public async submitSave(): Promise<void> {
        await this.service.insert(this.visit).toPromise().then(
            function (ok) {
                Swal.fire('Saved', 'Record saved successfully', 'success');
            }, function (error) {
                Swal.fire('Error', 'Error was ocurred while insert. ' + error, 'error');
            }
        );
        this.router.navigate(['/visit']);
    }

    public async submitEdit(): Promise<void> {
        await this.service.update(this.visit).toPromise().then(
            function (ok) {
                Swal.fire('Updated', 'Record updated successfully', 'success');
            }, function (error) {
                Swal.fire('Error', 'Error was ocurred while insert. ' + error, 'error');
            }
        );
        this.router.navigate(['/visit']);
    }

}
