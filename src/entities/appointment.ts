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
       
       const { startAt, endAt } = props

       if(startAt <= new Date()){
        throw new Error('Invalid start date')
       }

       if(endAt <= startAt){
        throw new Error('Invalid end date')
       }
        
        this.props = props
    }

}