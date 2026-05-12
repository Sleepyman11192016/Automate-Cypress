export const schemaGETApi = {
    properties:{
        userId:{type: 'number'},
        id:{type: 'number'},
        title:{type: 'string'},
        body:{type: 'string'}
    },
    required: ['userId','id','title','body']
}

export const SchemaPOSTApi = {
    properties:{
        bookingid: {type: 'number'},
        firstname: {type: 'string'},
        lastname: {type: 'string'},
        totalprice: {type: 'number'},
        depositpaid: {type: 'boolean'},
        bookingdates: {
            properties:{
                checkin: {type: 'string'},
                checkout: {type: 'string'}
            }
        },
        additionalneeds: {type: 'string'}
    }
}