type User = {
    readonly _id: string,
    name: string,
    email: string,
    isActive: true,
    credCardDetails?: number,
    

}

let myUser: User={
    _id: "12142",
    name: "John",
    email: "john@example.com",
    isActive: true,
}


type cardNumber ={
    cardnumber : string,
    
}

type cardData ={
    cardData: string,
}

type cardDetails = cardNumber & cardData & {
    cvv: number,
}

myUser.email = "john1@example.com"
// myUser._id = "asa"