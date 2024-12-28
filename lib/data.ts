import Image from "next/image";
import Link from "next/link";

const SidebarLinks = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: "/icons/home.svg",
  },
  {
    title: "Chatbot",
    href: "/chatbot",
    icon: "/icons/chatbot.svg",
  },
  {
    title: "Schedule",
    href: "/schedule",
    icon: "/icons/schedule.svg",
  },
  {
    title: "Classes",
    href: "/classes",
    icon: "/icons/classes.svg",
  },
  {
    title: "Assignments",
    href: "/assignments",
    icon: "/icons/assignments.svg",
  },
  {
    title: "Exams",
    href: "/exams",
    icon: "/icons/exams.svg",
  },
  {
    title: "Grades",
    href: "/grades",
    icon: "/icons/grades.svg",
  },
];

const Users = [
  {
    name: "John Doe",
    username: "johndoe",
    email: "giladwe21@gmail.com",
    profile_image: "/images/profile_image.png",
  },
];

const Classes = [
  {
    user: Users[0],
    title: "Math",
    href: "",
  },
  {
    user: Users[0],
    title: "Physics",
    href: "",
  },
  {
    user: Users[0],
    title: "Bible",
    href: "",
  },
];

const Assignments = [
  {
    id: "1212121",
    user: Users[0],
    class: Classes[0],
    name: "Math Homework",
    description: "Do a lot of practice questions for your homework",
    date_created: new Date("October 13, 2023 11:13:00"),
    due_date: new Date("October 13, 2023 11:13:00"),
    statue: "in progress",
    grade: 96,
  },
  {
    id: "122342312121",
    user: Users[0],
    class: Classes[0],
    name: "Math Homework",
    description: "Do a lot of practice questions for your homework",
    date_created: new Date("October 13, 2023 11:13:00"),
    due_date: new Date("October 13, 2023 11:13:00"),
    statue: "in progress",
    grade: 96,
  },
  {
    id: "2121",
    user: Users[0],
    class: Classes[0],
    name: "Math Homework",
    description: "Do a lot of practice questions for your homework",
    date_created: new Date("October 13, 2023 11:13:00"),
    due_date: new Date("October 13, 2023 21:13:00"),
    statue: "in progress",
    grade: 96,
  },
];

const Exams = [
  {
    id: "1",
    user: Users[0],
    class: Classes[0],
    name: "bagrut",
    date: new Date("October 13, 2023"),
    duration: 120,
    grade: 97,
  },
  {
    id: "21",
    user: Users[0],
    class: Classes[0],
    name: "bagrut",
    date: new Date("October 13, 2023"),
    duration: 120,
    grade: 97,
  },
  {
    id: "12",
    user: Users[0],
    class: Classes[0],
    name: "bagrut",
    date: new Date("October 13, 2023"),
    duration: 120,
    grade: 97,
  },
];

export { SidebarLinks, Users, Classes, Assignments, Exams };
