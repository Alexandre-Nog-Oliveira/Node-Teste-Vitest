import { describe, it, expect } from 'vitest';
import { CreateAppointment } from './create-appointment';
import { Appointment } from '../entities/appointment';
import { getFutureDate } from '../tests/utils/get-future-date';


describe('Create Appointment', () =>{
    it('should be able to create an appointment', () => {

        const startAt = getFutureDate('2022-08-10')
        const endAt = getFutureDate('2022-08-11')
        
        const createAppointment = new CreateAppointment();


        expect(createAppointment.execute({
            customer: 'Jane Doe',
            startAt,
            endAt,
        })).resolves.toBeInstanceOf(Appointment)
    })
})