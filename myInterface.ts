interface User {
    readonly dbId: number;
    email: string;
    userId: number;
    googleId?: string;
    // startTrial: () => string
    startTrail(): string;
    getCoupon(couponName: string, value: number): number;
}

const Parteek: User = {dbId: 121, email: "a@b.com", userId:321, startTrail : () =>{
    return "trial started"
},
getCoupon:(name: "Partewk21", off: 12) => {
    return 10;
}
}


Parteek.email = "a@c.com"
// Parteek.dbId = 3321; // Not Allowed


export {}