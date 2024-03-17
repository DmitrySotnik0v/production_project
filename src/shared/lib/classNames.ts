type Mods = Record<string, boolean | string>;

const obj: Mods = {};

export const classNames = (cls: string, mods?: Mods, additional?: string[]) => [
  cls,
  ...additional.filter(Boolean),
  ...Object.entries(mods)
    .filter(([className, value]) => Boolean(value))
    .map(([className]) => className),
].join(' ');
