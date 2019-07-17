import { IContext } from "zem";

export function getNamePrefix(context: IContext): string | null {
  const rawConfig = context.getOption("namePrefix") as string;
  return rawConfig === "" ? null : rawConfig;
}
