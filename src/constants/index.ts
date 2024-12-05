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
    title: "Registrasi Peserta",
    description: "",
    timeline: "08:00-09:00",
  },
  {
    id: 2,
    title: "Pembukaan Palu Developer Day 2024",
    description: "Panitia Palu Developer Day 2024",
    timeline: "08:30-08:40",
  },
  {
    id: 3,
    title: "Pembacaan Doa",
    description: "",
    timeline: "08:40-08:45",
  },
  {
    id: 4,
    title: "Menyanyikan Lagu Indonesia Raya",
    description: "",
    timeline: "08:45-08:50",
  },
  {
    id: 5,
    title: "Laporan Ketua Panitia",
    description: "Ketua panitia memberikan laporan mengenai persiapan dan harapan untuk acara ini.",
    timeline: "08:50-08:55",
  },
  {
    id: 6,
    title: "Sambutan Senat Mahasiswa UIN Datokarama",
    description: "",
    timeline: "08:55-09:05",
  },
  {
    id: 7,
    title: "Sambutan Ketua HammerCode 2024",
    description: "Khairun Nisa Cipta Hapsari",
    timeline: "09:05-09:15",
  },
  {
    id: 8,
    title: "Talkshow & QnA",
    description: "Fendi Irfan Amorokhman (Data Engineer at OY Indonesia), Rian Apriansyah (Software Engineer at Unit4)",
    timeline: "09:15-11:15",
  },
  {
    id: 9,
    title: "Penyerahan Penghargaan Pemateri",
    description: "",
    timeline: "11:15-11.25",
  },
  {
    id: 10,
    title: "Games & Penyerahan Hadiah",
    description: "",
    timeline: "11:25-11:55",
  },
  {
    id: 11,
    title: "Penutupan",
    description: "",
    timeline: "11:55-12:30",
  },
];
