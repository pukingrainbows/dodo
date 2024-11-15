import { Atom } from "./Atom"

export default {
  title: "Core/Atom",
}

export function _Atom() {
  return <Atom>hi</Atom>
}

export function _Atom_as_button() {
  return <Atom as="button">hi</Atom>
}
