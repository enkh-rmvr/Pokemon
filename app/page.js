// import { Counter } from "./components/Counter";
// import { LightSwitch } from "./components/LightSwitch";
// import { SecretMessage } from "./components/SecretMessage";
// import { ToDo } from "./components/ToDo";
import { Pokemon } from "./components/Pokemon";
export default function Home() {
  return (
    <>
      <div className="m-auto flex gap-7">
        {/* <Counter />
        <LightSwitch />
        <SecretMessage /> */}
        <Pokemon />
      </div>
    </>
  );
}
