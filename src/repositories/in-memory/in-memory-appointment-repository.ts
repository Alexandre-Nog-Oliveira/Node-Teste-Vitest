import { Appointment } from "../../entities/appointment";
import { AppointmentRepository } from "../appointments-repository";
import { areIntervalsOverlapping } from "date-fns";

export class InMemoryAppointmentRepository implements AppointmentRepository{
   
    public items: Appointment[] = []

    async  create(appointment: Appointment): Promise<void> {
        this.items.push(appointment)
    }


    async cancel(Appointment: Appointment): Promise<void> {
        
    }

    async findOverLappingAppointment(startAt: Date, endsAt: Date): Promise<Appointment | null> {
        const overLappingAppointment = this.items.find(appointment => {
            return areIntervalsOverlapping(
                { start: startAt, end: endsAt},
                {start: appointment.startAt, end:appointment.endAt},
                {inclusive: true}
            )
        })

        if(!overLappingAppointment){
            return null
        }

        return overLappingAppointment
    }
}