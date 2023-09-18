import { describe, it, expect } from 'vitest';
import { CreateAppointment } from './create-appointment';
import { Appointment } from '../entities/appointment';
import { getFutureDate } from '../tests/utils/get-future-date';
import { InMemoryAppointmentRepository } from '../repositories/in-memory/in-memory-appointment-repository';


describe('Create Appointment', () =>{
    it('should be able to create an appointment', () => {

        const startAt = getFutureDate('2022-08-10')
        const endAt = getFutureDate('2022-08-11')


        const appotintmentsRepository = new InMemoryAppointmentRepository()
        const createAppointment = new CreateAppointment(appotintmentsRepository);


        expect(createAppointment.execute({
            customer: 'Jane Doe',
            startAt,
            endAt,
        })).resolves.toBeInstanceOf(Appointment)
    })

    it('should not be able to create an appointment with overlapping dates ', async () => {

        const startAt = getFutureDate('2022-08-10')
        const endAt = getFutureDate('2022-08-15')


        const appotintmentsRepository = new InMemoryAppointmentRepository()
        const createAppointment = new CreateAppointment(appotintmentsRepository);


        await createAppointment.execute({
            customer: 'Jane Doe',
            startAt,
            endAt,
        })

        expect(createAppointment.execute({
            customer: 'Jane Doe',
            startAt: getFutureDate('2022-08-14'),
            endAt: getFutureDate('2022-08-18')
        })).rejects.toBeInstanceOf(Error)
    })
})