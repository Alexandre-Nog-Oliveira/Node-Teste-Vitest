import { Appointment } from './appointment';
import { expect, test } from "vitest";

test('create an appointment', () => {

    const endAt = new Date()
    endAt.setDate(endAt.getDate() + 1)

    const appointment = new Appointment({
        customer: 'Jane Doe',
        startAt: new Date(),
        endAt,
    })

    expect(appointment).toBeInstanceOf(Appointment)
    expect(appointment.customer).toEqual('Jane Doe')
})


test('Cannot create an appointment with end date before start date', () => {
    
    const startAt = new Date()
    const endAt = new Date()

    endAt.setDate(endAt.getDate() - 1)

    expect(() => {
        return new Appointment({
            customer: "Jane Doe",
            startAt,
            endAt
        })
    }).toThrow()
})