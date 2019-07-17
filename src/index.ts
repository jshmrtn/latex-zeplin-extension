import camelCase from "lodash/camelCase";
import * as zem from "zem";
import { getNamePrefix } from "./config";
import { getColorsFromContext } from "./helpers/context";
import { code, codeExport } from "./helpers/zem";

function renderComment(text: string): string {
  return text.split("\n")
    .map((line) => `% ${line}`)
    .join("\n");
}

function now(): string {
  const date = new Date();
  return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
}

function name(context: zem.IContext, baseName: string): string {
  const namePrefix = getNamePrefix(context);

  return namePrefix === null ? baseName : camelCase(`${namePrefix}.${baseName}`);
}

function renderColor(context: zem.IContext, color: zem.IColor) {
  return `\\definecolor{${name(context, color.name)}}{RGB}{${color.r}, ${color.g}, ${color.b}}`;
}

function colors(context: zem.IContext): zem.ICodeObject {
  try {
    const projectColors = getColorsFromContext(context);

    const colorsCode = `\\NeedsTeXFormat{LaTeX2e}[1994/06/01]
\\ProvidesPackage{${name(context, "colors")}}[${now()} Project Colors]

\\RequirePackage{xcolor}

${projectColors.map((color) => renderColor(context, color)).join("\n")}`;

    return code(colorsCode);
  } catch (e) {
    return code(renderComment(`${e}\n${e.stack}`));
  }
}

function exportColors(context: zem.IContext): zem.ICodeExportObject {
  return codeExport(colors(context), `${name(context, "colors")}.sty`);
}

const extension: zem.IExtension = {
  colors,
  exportColors,
};
export default extension;
