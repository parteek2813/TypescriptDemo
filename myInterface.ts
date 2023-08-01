interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  // startTrial: () => string
  startTrail(): string;
  getCoupon(couponName: string, value: number): number;
}

// Reopening of interfaces: .... like we some other developer declared a interface but we wanna add one
// more method into it ... then we can simply declare another user with the same name and in that declare methods
// and that method will now be available in all the interfaces

interface User {
  githubToken: string;
}

// Interface inheritance

interface Admin extends User {
  role: "admin" | "ta" | "learner";
}

const Parteek: User = {
  dbId: 121,
  email: "a@b.com",
  userId: 321,
  startTrail: () => {
    return "trial started";
  },
  githubToken: "github",
  getCoupon: (name: "Partewk21", off: 12) => {
    return 10;
  },
};

Parteek.email = "a@c.com";
// Parteek.dbId = 3321; // Not Allowed

export {};
