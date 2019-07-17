import * as zem from "zem";

enum CONTAINER_TYPE {
  "STYLEGUIDE" = "styleguide",
  "PROJECT" = "project",
}

function containerType(context: zem.IContext): CONTAINER_TYPE {
  return CONTAINER_TYPE.STYLEGUIDE in context && context.styleguide !== undefined
    ? CONTAINER_TYPE.STYLEGUIDE
    : CONTAINER_TYPE.PROJECT;
}

export function getColorsFromContext(context: zem.IContext): ReadonlyArray<zem.IColor> {
  switch (containerType(context)) {
    case CONTAINER_TYPE.PROJECT:
      return [
        ...context.project.colors,
        ...(context.project.linkedStyleguide ? context.project.linkedStyleguide.colors : []),
      ];
    case CONTAINER_TYPE.STYLEGUIDE:
     return context.styleguide.colors;
  }
}
