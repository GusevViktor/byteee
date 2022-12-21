export interface User {
  id: string;
  name: string | null;
  email: string;
  avatarUrl: string | null;
  password: string | null;
  passwordType: PasswordType;
}

export const EVENT_STATUS_UPCOMING = "upcoming";
export const EVENT_STATUS_LIVE = "live";
export const EVENT_STATUS_PAST = "past";
export const EVENT_STATUS_DRAFT = "draft";

export const EVENT_ROLE_ORGANIZER = "organizer";
export const EVENT_ROLE_SPEAKER = "speaker";
export const EVENT_ROLE_ATTENDEE = "attendee";

export interface LoginByEmailResponse {
  user: User;
}

export interface SignUpByEmailResponse {
  user: User;
}

export type PasswordType = "password" | "code";

export interface ValidateByEmailResponse {
  isValid: boolean;
  passwordType: PasswordType;
}

export interface ErrorResponse {
  errorCode: number;
  errorMessage: string;
}

export interface Vacancy {
  id: number | string;
  title: string;
  address: string;
  aboutbyteee: string;
  offerings: string[];
  duties: string[];
  requirements: string[];
  description: string;
}

export interface UserEvent {
  id: string;
  title: string;
  media: string;
  date: string;
  startTime: string;
  endTime: string;
  roles: Role[] | [];
  status: string;
  bookmarked: boolean;
}

export interface Event {
  id: string;
  title: string;
  description: string | null;
  media: string;
  date: string;
  startTime: string;
  endTime: string;
  roles: Role[] | [];
  sessions: Session[];
  isRegistered: boolean;
  isSoldOut: boolean;
  speakers: string[];
  status: string;
  organizer: string;
  avatar: string;
}

export interface Session {
  id: string,
  title: string,
  description: string,
  startTime: string,
  endTime: string,
  speaker: string,
}

type Role = "attendee" | "organizer" | "speaker";


const users: User[] = [
  {
    id: "1",
    email: "1@byteee.net",
    password: "12345",
    passwordType: "password",
    name: "Ivan Petrov",
    avatarUrl: ""
  },
  {
    id: "2",
    email: "2@byteee.net",
    password: null,
    passwordType: "code",
    name: "Vasiliy Komarov",
    avatarUrl: ""
  }
];
const eventDescription = `From large companies to individuals around the world,
we're all being called to connect, communicate and create clarity
in new ways. It's a moment of radical adaptation — to do more of what
matters to us, faster and better.

  That's why we're hosting Block by Block, a virtual conference
focused on these challenges and opportunities. The program is designed
to equip you with new features, systems, and the most impactful Notion
setups used by companies and productivity experts. By the end, you'll
have everything you need to unlock a higher level of alignment, speed, 
and organization.

  Keep an eye on the Block by Block website for up-to-date info on speakers
and session schedules. You can also follow us on Twitter, Instagram,
and Linkedin for even more content and fun surprises!`;

const findByLogin = (login: string): User | undefined => (
  users.find((user) => login === user.email)
);

const delay = (time: number, value: {
  isValid: boolean,
  passwordType: PasswordType
}):
Promise<ValidateByEmailResponse> => new Promise((resolve) => {
  setTimeout(() => {
    resolve(value);
  }, time);
});

const api = {
  validateByEmail: (email: string): Promise<ValidateByEmailResponse> => {
    const user = findByLogin(email);
    const passType = user?.password ? "password" : "code";
    return delay(500, {
      isValid: !!user,
      passwordType: passType
    });
  },
  loginByEmail: (
    email: string,
    password: string,
    type: PasswordType
  ): LoginByEmailResponse | null => {
    const user = findByLogin(email);
    if (!user) {
      return null;
    }

    const validPasswordCode = "0000";

    if (type === "code" && password === validPasswordCode) {
      return { user: user };
    }

    if (type === "password" && password === user.password) {
      return { user: user };
    }

    return null;
  },

  signupByEmail: (
    email: string,
    code: string,
    passwordType: PasswordType
  ): SignUpByEmailResponse | null => {
    const authorizedUser = findByLogin(email);
    const validCode = "0000";
    if (!authorizedUser && code === validCode) {
      return {
        user: {
          email: email,
          password: code,
          id: "3",
          avatarUrl: null,
          name: null,
          passwordType: passwordType
        }
      };
    }
    return null;
  },

  vacancies: (): Vacancy[] => [
    {
      id: 1,
      title: "Senior Frontend Developer",
      address: "Saint Petersburg or remote",
      aboutbyteee:
        "We are not scared of today's life setbacks caused by closed borders, "
        + "diseases, gaps in living standards and education levels, technological "
        + "imperfections, and inaccessible software, but we strive to make every "
        + "next day better through connecting people and giving them the freedom to "
        + "share, perceive and exchange knowledge, emotions, and experience. We are "
        + "excited about a diverse set of perspectives, personal "
        + "and working experiences, "
        + "and also religious and cultural differences that every team member "
        + "contributes to the common cause. Thus our core employment values"
        + " are your talent and personality, and there are no other"
        + " limitations or handicaps.",
      offerings: [
        "Salary between £55k and £80k per annum.",
        "Private health insurance with gym discounts & more",
        "27 days holiday + bank holidays",
        "Work From Home 3 days a week when we're back in the office, "
        + "and flexible working hours",
        "£1,000 personal development budget per year"
      ],
      duties: [
        "Design and implement microservices, APIs to drive platform "
        + "integrations across web and mobile platforms",
        "Collaborate with cross-functional teams to build interfaces "
        + "and systems that can evolve to meet critical business needs",
        "Build our platforms--infrastructure, applications and tools "
        + "using your expertise in distributed systems, "
        + "large compute clusters and petabyte-scale storage infrastructure",
        "Scale distributed applications in a highly-available 24x7 "
        + "environment, make architectural trade-offs applying "
        + "design patterns and disciplined execution"
      ],
      requirements: [
        "2+ years experience as a Tech Lead or in a comparable "
        + "technology leadership role",
        "Strong fundamental and practical knowledge of HTML, "
        + "CSS, jQuery and JavaScript",
        "Experience managing or leading a team",
        "A strong problem-solving, detail-oriented approach",
        "Experience collaborating with Creative team members"
      ],
      description:
        "We will consider any individual without regard of race, "
        + "religion, national origin, creed, color, sex, sexual orientation, "
        + "gender identity, gender expression, age, ancestry, physical or "
        + "mental disability, or medical condition "
        + "including medical characteristics, "
        + "marital status, military service, or any other "
        + "classification protected by applicable local, state or federal laws. "
        + "We will base our employment decisions on "
        + "business needs, job requirements, "
        + "merit, and individual qualifications."
    },

    {
      id: 2,
      title: "Software Engineering Manager Lead",
      address: "Remote",
      aboutbyteee:
        "We are not scared of today's life setbacks caused by "
        + "closed borders, diseases, gaps in living standards and education "
        + "levels, technological imperfections, and inaccessible software, "
        + "but we strive to make every next day better through connecting "
        + "people and giving them the freedom to share, perceive and exchange "
        + "knowledge, emotions, and experience. We are excited about a "
        + "diverse set of perspectives, personal and working experiences, and "
        + "also religious and cultural differences "
        + "that every team member contributes to the "
        + "common cause. Thus our core employment values are your "
        + "talent and personality, and there are no other "
        + "limitations or handicaps.",
      offerings: [
        "Salary between £55k and £80k per annum.",
        "Private health insurance with gym discounts & more",
        "27 days holiday + bank holidays",
        "Work From Home 3 days a week when we're back in "
        + "the office, and flexible working hours",
        "£1,000 personal development budget per year"
      ],
      duties: [
        "Design and implement microservices, APIs to drive platform "
        + "integrations across web and mobile platforms",
        "Collaborate with cross-functional teams to build interfaces "
        + "and systems that can evolve to meet critical business needs",
        "Build our platforms--infrastructure, applications and tools "
        + "using your expertise in distributed systems, large compute "
        + "clusters and petabyte-scale storage infrastructure",
        "Scale distributed applications in a highly-available 24x7 "
        + "environment, make architectural trade-offs applying design "
        + "patterns and disciplined execution"
      ],
      requirements: [
        "2+ years experience as a Tech Lead or in a "
        + "comparable technology leadership role",
        "Strong fundamental and practical knowledge of HTML, "
        + "CSS, jQuery and JavaScript",
        "Experience managing or leading a team",
        "A strong problem-solving, detail-oriented approach",
        "Experience collaborating with Creative team members"
      ],
      description:
        "We will consider any individual without regard of race, "
        + "religion, national origin, creed, color, sex, sexual orientation, "
        + "gender identity, gender expression, age, ancestry, physical or mental "
        + "disability, or medical condition including medical characteristics, "
        + "marital status, military service, or any other "
        + "classification protected by "
        + "applicable local, state or federal laws. We will base our employment "
        + "decisions on business needs, job requirements, merit, and "
        + "individual qualifications."
    }
  ],
  getEventsList: (): UserEvent[] => [
    {
      id: "1",
      title: "Boost your international Business Development - " +
        "Best practices in international Business Development",
      media: "https://picsum.photos/640/360?random=1",
      date: "Jan 09, 2023",
      startTime: "3:00",
      endTime: "4:00",
      roles: [EVENT_ROLE_ORGANIZER, EVENT_ROLE_SPEAKER],
      status: EVENT_STATUS_PAST,
      bookmarked: false
    },
    {
      id: "2",
      title: "Boost your international Business Development - " +
        "Best practices in international Business Development",
      media: "https://picsum.photos/640/360?random=2",
      date: "Jan 09, 2023",
      startTime: "3:00",
      endTime: "5:00",
      roles: ["speaker"],
      status: "upcoming",
      bookmarked: false
    },
    {
      id: "3",
      title: "Boost your international Business Development -  " +
        "Best practices in international Business Development",
      media: "https://picsum.photos/640/360?random=3",
      date: "Jan 09, 2023",
      startTime: "1:00",
      endTime: "2:00",
      roles: ["attendee"],
      status: "live",
      bookmarked: false
    },
    {
      id: "4",
      title: "Boost your international Business Development -  " +
        "Best practices in international Business Development",
      media: "https://picsum.photos/640/360?random=4",
      date: "Jan 09, 2023",
      startTime: "1:00",
      endTime: "2:00",
      roles: ["organizer"],
      status: "draft",
      bookmarked: true
    },
    {
      id: "5",
      title: "Boost your international Business Development -  " +
        "Best practices in international Business Development",
      media: "https://picsum.photos/640/360?random=5",
      date: "Jan 09, 2023",
      startTime: "1:00",
      endTime: "2:00",
      roles: ["speaker"],
      status: "draft",
      bookmarked: false
    },
    {
      id: "6",
      title: "Boost your international Business Development -  " +
        "Best practices in international Business Development",
      media: "https://picsum.photos/640/360?random=6",
      date: "Jan 09, 2023",
      startTime: "1:00",
      endTime: "2:00",
      roles: ["attendee"],
      status: "past",
      bookmarked: false
    },
    {
      id: "7",
      title: "Boost your international Business Development -  " +
        "Best practices in international Business Development",
      media: "https://picsum.photos/640/360?random=7",
      date: "Jan 09, 2023",
      startTime: "1:00",
      endTime: "2:00",
      roles: ["speaker", "organizer"],
      status: "live",
      bookmarked: true
    },
    {
      id: "8",
      title: "Boost your international Business Development -  " +
        "Best practices in international Business Development",
      media: "https://picsum.photos/640/360?random=8",
      date: "Jan 09, 2023",
      startTime: "1:00",
      endTime: "2:00",
      roles: ["attendee"],
      status: "upcoming",
      bookmarked: false
    },
    {
      id: "9",
      title: "Boost your international Business Development -  " +
        "Best practices in international Business Development",
      media: "https://picsum.photos/640/360?random=9",
      date: "Jan 09, 2023",
      startTime: "1:00",
      endTime: "2:00",
      roles: ["speaker"],
      status: "past",
      bookmarked: true
    },
    {
      id: "10",
      title: "Boost your international Business Development -  " +
        "Best practices in international Business Development",
      media: "https://picsum.photos/640/360?random=10",
      date: "Jan 09, 2023",
      startTime: "1:00",
      endTime: "2:00",
      roles: ["organizer"],
      status: "upcoming",
      bookmarked: false
    },
    {
      id: "11",
      title: "Boost your international Business Development -  " +
        "Best practices in international Business Development",
      media: "https://picsum.photos/640/360?random=11",
      date: "Jan 09, 2023",
      startTime: "1:00",
      endTime: "2:00",
      roles: ["speaker"],
      status: "live",
      bookmarked: false
    },
    {
      id: "12",
      title: "Boost your international Business Development -  " +
        "Best practices in international Business Development",
      media: "https://picsum.photos/640/360?random=12",
      date: "Jan 09, 2023",
      startTime: "1:00",
      endTime: "2:00",
      roles: [],
      status: "live",
      bookmarked: true
    }
  ],
  getEventTicket: (): Event[] => [
    {
      id: "1",
      title: "byteee: A new virtual event platform for you",
      description: `${eventDescription}`,
      media: "src/assets/images/event_img.jpeg",
      date: "Jan 22, 2023",
      startTime: "01/22/2023 11:00:00",
      endTime: "01/22/2023 15:00:00",
      roles: ["organizer"],
      status: "upcoming",
      speakers: ["Alex Wander",
        "Alex Wander",
        "Alex Wander"
      ],
      sessions: [
        {
          id: "1",
          title: "Platform features and capabilities",
          description: "Keep an eye on the Block by Block website for up-to-date" +
            " info on speakers and session schedules. You can also follow us on " +
            "Twitt Keep an eye on the Block by Block website for up-to-date info " +
            "on speakers and session schedules. You can also follow us on Twitt",
          startTime: "01/22/2023 11:00:00",
          endTime: "01/22/2023 12:25:00",
          speaker: "Alex Wander"
        },
        {
          id: "2",
          title: "Platform features and capabilities",
          description: "Keep an eye on the Block by Block website for up-to-date" +
            " info on speakers and session schedules. You can also follow us on " +
            "Twitt Keep an eye on the Block by Block website for up-to-date info " +
            "on speakers and session schedules. You can also follow us on Twitt",
          startTime: "01/22/2023 13:00:00",
          endTime: "01/22/2023 13:30:00",
          speaker: "Alex Wander"
        },
        {
          id: "3",
          title: "Platform features and capabilities" +
            " platform features and capabilities",
          description: "Keep an eye on the Block by Block website for up-to-date" +
            " info on speakers and session schedules. You can also follow us on " +
            "Twitt Keep an eye on the Block by Block website for up-to-date info " +
            "on speakers and session schedules. You can also follow us on Twitt",
          startTime: "01/22/2023 14:00:00",
          endTime: "01/22/2023 15:00:00",
          speaker: "Alex Wander"
        }
      ],
      isRegistered: true,
      isSoldOut: false,
      organizer: "Alex Wander",
      avatar: process.env.PUBLIC_URL + "/img/avatar_female.svg"
    },
    {
      id: "2",
      title: "byteee: A new virtual event platform for you",
      description: `${eventDescription}`,
      media: "src/assets/images/event_img.jpeg",
      date: "Jan 22, 2023",
      startTime: "01/22/2023 11:00:00",
      endTime: "01/22/2023 13:00:00",
      roles: ["attendee"],
      status: "upcoming",
      speakers: ["Alex Wander", "Alex Wander", "Alex Wander", "Alex Wander"],
      sessions: [
        {
          id: "4",
          title: "Platform features and capabilities",
          description: "Keep an eye on the Block by Block website for up-to-date" +
            " info on speakers and session schedules. You can also follow us on " +
            "Twitt Keep an eye on the Block by Block website for up-to-date info " +
            "on speakers and session schedules. You can also follow us on Twitt",
          startTime: "01/22/2023 11:00:00",
          endTime: "01/22/2023 11:15:00",
          speaker: "Alex Wander"
        },
        {
          id: "5",
          title: "Platform features and capabilities",
          description: "Keep an eye on the Block by Block website for up-to-date" +
            " info on speakers and session schedules. You can also follow us on " +
            "Twitt Keep an eye on the Block by Block website for up-to-date info " +
            "on speakers and session schedules. You can also follow us on Twitt",
          startTime: "01/22/2023 11:30:00",
          endTime: "01/22/2023 12:05:00",
          speaker: "Alex Wander"
        },
        {
          id: "6",
          title: "Platform features and capabilities",
          description: "Keep an eye on the Block by Block website for up-to-date" +
            " info on speakers and session schedules. You can also follow us on " +
            "Twitt Keep an eye on the Block by Block website for up-to-date info " +
            "on speakers and session schedules. You can also follow us on Twitt",
          startTime: "01/22/2023 12:15:00",
          endTime: "01/22/2023 13:00:00",
          speaker: "Alex Wander"
        }
      ],
      isRegistered: false,
      isSoldOut: false,
      organizer: "Alex Wander",
      avatar: process.env.PUBLIC_URL + "/img/avatar_female.svg"
    },
    {
      id: "3",
      title: "byteee: A new virtual event platform for you",
      description: `${eventDescription}`,
      media: "src/assets/images/event_img.jpeg",
      date: "Jan 20, 2021",
      startTime: "01/20/2021 11:00:00",
      endTime: "01/20/2021 15:00:00",
      roles: ["speaker"],
      status: "past",
      speakers: ["Alex Wander", "Alex Wander"],
      sessions: [
        {
          id: "7",
          title: "Platform features and capabilities",
          description: "Keep an eye on the Block by Block website for up-to-date" +
            " info on speakers and session schedules. You can also follow us on " +
            "Twitt Keep an eye on the Block by Block website for up-to-date info " +
            "on speakers and session schedules. You can also follow us on Twitt",
          startTime: "01/20/2021 11:00:00",
          endTime: "01/20/2021 12:00:00",
          speaker: "Alex Wander"
        },
        {
          id: "8",
          title: "Platform features and capabilities",
          description: "Keep an eye on the Block by Block website for up-to-date" +
            " info on speakers and session schedules. You can also follow us on " +
            "Twitt Keep an eye on the Block by Block website for up-to-date info " +
            "on speakers and session schedules. You can also follow us on Twitt",
          startTime: "01/20/2021 12:15:00",
          endTime: "01/20/2021 15:00:00",
          speaker: "Alex Wander"
        }
      ],
      isRegistered: false,
      isSoldOut: false,
      organizer: "Alex Wander",
      avatar: process.env.PUBLIC_URL + "/img/avatar_female.svg"
    },
    {
      id: "4",
      title: "byteee: A new virtual event platform for you",
      description: `${eventDescription}`,
      media: "src/assets/images/event_img.jpeg",
      date: "Jan 22, 2023",
      startTime: "01/22/2023 11:00:00",
      endTime: "01/22/2023 15:00:00",
      roles: ["speaker"],
      status: "draft",
      speakers: ["Alex Wander", "Alex Wander"],
      sessions: [
        {
          id: "9",
          title: "Platform features and capabilities",
          description: "Keep an eye on the Block by Block website for up-to-date" +
            " info on speakers and session schedules. You can also follow us on " +
            "Twitt Keep an eye on the Block by Block website for up-to-date info " +
            "on speakers and session schedules. You can also follow us on Twitt",
          startTime: "01/22/2023 11:00:00",
          endTime: "01/22/2023 11:30:00",
          speaker: "Alex Wander"
        },
        {
          id: "10",
          title: "Platform features and capabilities",
          description: "Keep an eye on the Block by Block website for up-to-date" +
            " info on speakers and session schedules. You can also follow us on " +
            "Twitt Keep an eye on the Block by Block website for up-to-date info " +
            "on speakers and session schedules. You can also follow us on Twitt",
          startTime: "01/22/2023 12:15:00",
          endTime: "01/22/2023 13:00:00",
          speaker: "Alex Wander"
        },
        {
          id: "11",
          title: "Platform features and capabilities",
          description: "Keep an eye on the Block by Block website for up-to-date" +
            " info on speakers and session schedules. You can also follow us on " +
            "Twitt Keep an eye on the Block by Block website for up-to-date info " +
            "on speakers and session schedules. You can also follow us on Twitt",
          startTime: "01/22/2023 14:00:00",
          endTime: "01/22/2023 15:00:00",
          speaker: "Alex Wander"
        },
      ],
      isRegistered: true,
      isSoldOut: false,
      organizer: "Alex Wander",
      avatar: process.env.PUBLIC_URL + "/img/avatar_female.svg"
    },
    {
      id: "5",
      title: "byteee: A new virtual event platform for you",
      description: `${eventDescription}`,
      media: "src/assets/images/event_img.jpeg",
      date: "Oct 18, 2022",
      startTime: "10/18/2022 12:00:00",
      endTime: "10/18/2022 16:00:00",
      roles: ["speaker"],
      status: "live",
      speakers: ["Alex Wander", "Alex Wander"],
      sessions: [
        {
          id: "13",
          title: "Platform features and capabilities",
          description: "Keep an eye on the Block by Block website for up-to-date" +
            " info on speakers and session schedules. You can also follow us on " +
            "Twitt Keep an eye on the Block by Block website for up-to-date info " +
            "on speakers and session schedules. You can also follow us on Twitt",
          startTime: "10/18/2022 12:00:00",
          endTime: "10/18/2022 13:30:00",
          speaker: "Alex Wander"
        },
        {
          id: "14",
          title: "Platform features and capabilities",
          description: "Keep an eye on the Block by Block website for up-to-date" +
            " info on speakers and session schedules. You can also follow us on " +
            "Twitt Keep an eye on the Block by Block website for up-to-date info " +
            "on speakers and session schedules. You can also follow us on Twitt",
          startTime: "10/18/2022 15:00:00",
          endTime: "10/18/2022 16:00:00",
          speaker: "Alex Wander"
        }
      ],
      isRegistered: true,
      isSoldOut: false,
      organizer: "Alex Wander",
      avatar: process.env.PUBLIC_URL + "/img/avatar_female.svg"
    },
    {
      id: "6",
      title: "byteee: A new virtual event platform for you",
      description: null,
      media: "src/assets/images/event_img.jpeg",
      date: "Oct 11, 2023",
      startTime: "10/11/2023 09:00:00",
      endTime: "10/11/2023 13:00:00",
      roles: ["attendee"],
      status: "upcoming",
      speakers: ["Alex Wander", "Alex Wander"],
      sessions: [
        {
          id: "15",
          title: "Platform features and capabilities",
          description: "Keep an eye on the Block by Block website for up-to-date" +
            " info on speakers and session schedules. You can also follow us on " +
            "Twitt Keep an eye on the Block by Block website for up-to-date info " +
            "on speakers and session schedules. You can also follow us on Twitt",
          startTime: "10/11/2023 09:00:00",
          endTime: "10/11/2023 09:30:00",
          speaker: "Alex Wander"
        },
        {
          id: "16",
          title: "Platform features and capabilities",
          description: "Keep an eye on the Block by Block website for up-to-date" +
            " info on speakers and session schedules. You can also follow us on " +
            "Twitt Keep an eye on the Block by Block website for up-to-date info " +
            "on speakers and session schedules. You can also follow us on Twitt",
          startTime: "10/11/2023 11:00:00",
          endTime: "10/11/2023 13:00:00",
          speaker: "Alex Wander"
        },
      ],
      isRegistered: true,
      isSoldOut: false,
      organizer: "Alex Wander",
      avatar: process.env.PUBLIC_URL + "/img/avatar_female.svg"
    },
    {
      id: "7",
      title: "byteee: A new virtual event platform for you",
      description: `${eventDescription}`,
      media: "src/assets/images/event_img.jpeg",
      date: "Oct 11, 2023",
      startTime: "10/11/2023 09:00:00",
      endTime: "10/11/2023 11:00:00",
      roles: ["speaker"],
      status: "draft",
      speakers: ["Alex Wander"],
      sessions: [
        {
          id: "17",
          title: "Platform features and capabilities",
          description: "Keep an eye on the Block by Block website for up-to-date" +
            " info on speakers and session schedules. You can also follow us on " +
            "Twitt Keep an eye on the Block by Block website for up-to-date info " +
            "on speakers and session schedules. You can also follow us on Twitt",
          startTime: "10/11/2023 09:00:00",
          endTime: "10/11/2023 11:00:00",
          speaker: "Alex Wander"
        },
      ],
      isRegistered: true,
      isSoldOut: false,
      organizer: "Alex Wander",
      avatar: process.env.PUBLIC_URL + "/img/avatar_female.svg"
    },
  ]
};


export default api;
