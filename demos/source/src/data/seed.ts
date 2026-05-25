export type ClientNode = {
  id: string;
  name: string;
  ltv: number;
  lastVisit: string;
};

export type Advocate = {
  id: string;
  name: string;
  role: string;
  strengthScore: number;
  referrals: ClientNode[];
  subtreeLtv: number;
};

export type ActionCard = {
  id: string;
  type: "thank" | "reengage" | "ask";
  title: string;
  reason: string;
  message: string;
  priority: "high" | "medium";
};

export const business = {
  name: "Bloom Studio",
  vertical: "Salon",
};

export const earnedGrowth = {
  percent: 68,
  trend: "+12% vs last quarter",
  referralRevenue: 18400,
  paidRevenue: 8600,
};

export const topAdvocate: Advocate = {
  id: "lisa",
  name: "Lisa Chen",
  role: "Client & advocate",
  strengthScore: 92,
  subtreeLtv: 4200,
  referrals: [
    { id: "mike", name: "Mike Torres", ltv: 1200, lastVisit: "3 days ago" },
    { id: "jen", name: "Jen Walsh", ltv: 980, lastVisit: "1 week ago" },
    { id: "sam", name: "Sam Rivera", ltv: 2020, lastVisit: "Yesterday" },
  ],
};

export const actions: ActionCard[] = [
  {
    id: "1",
    type: "thank",
    title: "Thank Maria for the Johnson intro",
    reason: "Maria referred the Johnson family 5 days ago — both booked follow-ups.",
    message:
      "Hi Maria! Just wanted to say thank you for sending the Johnsons our way — they loved their visit. We really appreciate you thinking of us!",
    priority: "high",
  },
  {
    id: "2",
    type: "reengage",
    title: "Call James before asking again",
    reason:
      "James hasn't visited in 90 days but referred 4 people ($2,800 subtree). Reconnect personally first.",
    message:
      "Hey James, it's been a while — hope you're doing well! Would love to catch up and see if we can find a time that works for you.",
    priority: "high",
  },
  {
    id: "3",
    type: "ask",
    title: "Ask Lisa — peak advocacy window",
    reason:
      "Lisa's last visit was 5-star, 18 days ago. Your model suggests this is the best window to ask for one intro.",
    message:
      "Lisa, so glad you loved your color last time! If you know anyone who'd enjoy the same experience, I'd love to take great care of them — happy to offer them 15% off their first visit.",
    priority: "medium",
  },
];
