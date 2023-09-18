import { Appointment } from '../entities/appointment';
import { AppointmentRepository } from '../repositories/appointments-repository';


interface CreateAppointmentRequest {
    customer: string;
    startAt: Date;
    endAt: Date;
}

type CreateAppointmentResponse = Appointment

export class CreateAppointment {

    constructor(
        private appointmentsRepostory: AppointmentRepository
    ){}

    async execute ({customer, startAt, endAt} : CreateAppointmentRequest): Promise<CreateAppointmentResponse>{

        const overLappingAppoitnment = await this.appointmentsRepostory.findOverLappingAppointment(startAt,endAt)
        if(overLappingAppoitnment){
            throw new Error('Another appointment overlaps this appointment dates')
        }

        const appointment = new Appointment({
            customer,
            startAt,
            endAt,
        })

        await this.appointmentsRepostory.create(appointment)

        return appointment
    }
}