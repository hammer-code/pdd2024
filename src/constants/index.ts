import { NavList, RundownList, SpeakerList } from "@/types";

export const navLists: NavList[] = [
  {
    id: 1,
    name: "Speakers",
    navigate_url: "#speakers",
  },
  {
    id: 2,
    name: "Partners",
    navigate_url: "#partners",
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
    name: "Rian Apriansyah",
    role: "Software Engineer at Unit4",
    img: "/assets/images/rian.png",
  },
  {
    id: 2,
    name: "Fendi Irfan Amorokhman",
    role: "Data Engineer at OY Indonesia",
    img: "/assets/images/fandi.png",
  },
];

export const rundownLists: RundownList[] = [
  {
    id: 1,
    title: "Title",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    timeline: "08:00 - 09:00",
  },
  {
    id: 2,
    title: "Title",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    timeline: "09:00 - 10:00",
  },
  {
    id: 3,
    title: "Title",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    timeline: "10:00 - 11:00",
  },
];
