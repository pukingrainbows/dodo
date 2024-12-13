import humanId from "human-id"
import { nanoid } from "nanoid"

export class Id {
  /**
   * use human-id to generate a unique identifier
   * caveat The result is concatenated of adjective + noun + verb resulting in a minimum pool size of 15 000 000 possible combinations.
   *
   * @returns A unique identifier
   *
   * @example
   * Id.createHumanId() // "fancy-zebra-jumps"
   */
  static createHumanId() {
    return humanId({
      separator: "-",
      capitalize: false,
    })
  }

  /**
   * use nanoid to generate a unique identifier
   * @returns A unique identifier
   *
   * @example
   * Id.createNanoid() // "V1StGXR8_Z5jdHi6B-myT"
   */
  static id() {
    return nanoid()
  }
}
