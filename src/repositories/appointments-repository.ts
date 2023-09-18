import { Appointment } from './../entities/appointment';

export interface AppointmentRepository {
    create(appointment :Appointment): Promise<void>;
    cancel(Appointment: Appointment): Promise<void>

    findOverLappingAppointment(startAt: Date, endsAt: Date): Promise<Appointment | null>
}