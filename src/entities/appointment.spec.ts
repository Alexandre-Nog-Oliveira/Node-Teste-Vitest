import { getFutureDate } from '../tests/utils/get-future-date';
import { Appointment } from './appointment';
import { expect, test } from "vitest";

test('create an appointment', () => {

    const startAt = getFutureDate('2022-08-10')
   const endAt = getFutureDate('2022-08-11')

    const appointment = new Appointment({
        customer: 'Jane Doe',
        startAt,
        endAt,
    })

    expect(appointment).toBeInstanceOf(Appointment)
    expect(appointment.customer).toEqual('Jane Doe')
})


test('Cannot create an appointment with end date before start date', () => {
    
   const startAt = getFutureDate('2022-08-10')
   const endAt = getFutureDate('2022-08-09')

    expect(() => {
        return new Appointment({
            customer: "Jane Doe",
            startAt,
            endAt
        })
    }).toThrow()
})

test('Cannot create an appointment whit start date before now', () => {

    const startAt = new Date()
    const endAt = new Date()

    endAt.setDate(endAt.getDate() -1 )

    expect(() => {
        return new Appointment ({
            customer: 'Jane Doe',
            startAt,
            endAt
        })
    }).toThrow()
})