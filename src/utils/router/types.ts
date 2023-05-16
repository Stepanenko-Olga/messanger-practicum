import Block from "../Block/Block";

export interface BlockConstructable<P extends Record<string, unknown> = Record<string, unknown>> {
  new(props: P): Block<P>;
}
