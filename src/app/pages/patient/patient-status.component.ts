import { Component, OnInit } from '@angular/core';
import { EChartOption } from 'echarts';
import { VisitService } from '../visit/visit.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Visit } from '../visit/Visit';
import Swal from 'sweetalert2';


@Component({
    selector: 'app-patient-status',
    templateUrl: './patient-status.component.html',
    styleUrls: ['./patient-status.component.css']
})
export class PatientStatusComponent implements OnInit {

    chartOption: EChartOption;

    constructor(private service: VisitService, private activatedRoute: ActivatedRoute, private router: Router) { }

    ngOnInit() {
        this.activatedRoute.params.subscribe(async params => {
            let a: Visit[];
            let b = [];
            let c = [];
            let d = [];
            if (params.pacientId) {
                await this.service.getByPacient(params.pacientId).then(
                    function (ok) {
                        a = ok as Visit[];
                        for (let i = 0; i < a.length; i++) {
                            b.push(a[i].visitDate);
                            c.push(a[i].bloodPressure);
                            d.push(a[i].heartRate);
                        }
                    }, function (error) {
                        Swal.fire('Error', 'Ocurrio un error al intentar obtener datos. ' + error, 'error');
                    }
                );
                this.chartOption = {
                    xAxis: {
                        type: 'category',
                        data: b
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: c,
                        type: 'line'
                    }]
                }

            } else {
                this.router.navigate(['/patient']);
            }
        });
    }
}
