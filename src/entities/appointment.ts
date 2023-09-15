export interface AppointmentPropps{
     customer: string;
     startAt: Date;
     endAt: Date;
}

export class Appointment {
    
    private props: AppointmentPropps;

    get customer () {
        return this.props.customer
    }

    get startAt (){
        return this.props.startAt
    }

    get endAt (){
        return this.props.endAt
    }

    constructor(props : AppointmentPropps){
        this.props = props
    }

}