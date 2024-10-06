import { NavList, SpeakerList } from "@/types";

export const navLists: NavList[] = [
  {
    id: 1,
    name: "Speakers",
    navigate_url: "#speakers",
  },
  {
    id: 2,
    name: "Partners",
    navigate_url: "#speakers",
  },
  {
    id: 3,
    name: "Register Now!",
    navigate_url: "/",
  },
];

export const speakerLists: SpeakerList[] = [
  {
    id: 1,
    name: 'Adiatma Kamarudin',
    role: 'Principal Engineer at eFishery',
    img: '/assets/images/speaker11.png'
  },
  {
    id: 2,
    name: 'Fendi Irfan Amorokhman',
    role: 'Data Engineer at OY Indonesia',
    img: '/assets/images/speaker22.png'
  }
]
