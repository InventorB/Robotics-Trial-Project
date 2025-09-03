import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { Main } from "../braden/main";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Robot Controls" },
    { name: "description", content: "The robot control suite." },
  ];
}

export default function Home() {
  return <Main />;
}