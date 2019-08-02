import { Patient } from '../patient/Patient';

export class Visit {
    visitId: number;
    pacient: Patient;
    bloodPressure: number;
    heartRate: number;
    visitDate: Date;
    observation: string;
}