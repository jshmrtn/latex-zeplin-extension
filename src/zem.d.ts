/* tslint:disable */

declare module "zem" {
  export enum IBlurType {
    GAUSSIAN = "gaussian",
    BACKGROUND = "background",
  }

  export interface IBlur {
    readonly type: IBlurType;
    readonly radius: number;
  }

  export enum BorderPosition {
    CENTER = "center",
    INSIDE = "inside",
    OUTSIDE = "outside",
  }

  export interface IBorder {
    readonly position: BorderPosition;
    readonly thickness: number;
    readonly fill: IFill;
  }

  export interface IColor {
    // blendAll(colors: IColor): IColor;
    readonly name: string;
    readonly r: number;
    readonly g: number;
    readonly b: number;
    readonly a: number;
    equals(color: IColor): boolean;
    blend(color: IColor): IColor;
    toHex(color: IColor): IHexColor;
    toHsl(color: IColor): IHslColor;
  }

  export interface IColorStop {
    readonly color: IColor;
    readonly position: number;
  }

  export interface IComponent {
    readonly name: string;
    readonly description: string;
  }

  export interface IContext {
    readonly project?: IProject;
    readonly styleguide?: IStyleguide;
    getOption(name: string): number | boolean | string;
  }

  export interface IExtension {
    layer?(context: IContext, selectedLayer: ILayer): string | ICodeObject;
    screen?(context: IContext, selectedVerion: IVersion, selectedScreen: Screen): string | ICodeObject;
    component?(context: IContext, selectedVerion: IVersion, selectedComponent: IComponent): string | ICodeObject;
    colors?(context: IContext, colors: ReadonlyArray<IColor>): string | ICodeObject;
    textStyles?(context: IContext, textStyles: ReadonlyArray<ITextStyle>): string | ICodeObject;
    exportColors?(context: IContext, colors: ReadonlyArray<IColor>): ICodeExportObject | ReadonlyArray<ICodeExportObject>;
    exportTextStyles?(
      context: IContext,
      textStyles: ReadonlyArray<ITextStyle>,
    ): ICodeExportObject | ReadonlyArray<ICodeExportObject>;
    styleguideColors?(context: IContext, colors: ReadonlyArray<IColor>): string | ICodeObject; // DEPRECATED
    styleguideTextStyles?(context: IContext, textStyles: ReadonlyArray<ITextStyle>): string | ICodeObject; // DEPRECATED
    comment?(context: IContext, test: string): string; // DEPRECATED
    exportStyleguideColors?(context: IContext, colors: ReadonlyArray<IColor>): ICodeExportObject | ReadonlyArray<ICodeExportObject>; // DEPRECATED
    exportStyleguideTextStyles?(
      context: IContext,
      textStyles: ReadonlyArray<ITextStyle>,
    ): ICodeExportObject | ReadonlyArray<ICodeExportObject>; // DEPRECATED
  }

  export enum FillType {
    COLOR = "color",
    GRADIENT = "gradient",
  }

  export enum BlendMode {
    NORMAL = "normal",
    DARKEN = "darken",
    MULTIPLY = "multiply",
    COLOR_BURN = "color-burn",
    LIGHTEN = "lighten",
    SCREEN = "screen",
    COLOR_DODGE = "color-dodge",
    OVERLAY = "overlay",
    SOFT_LIGHT = "soft-light",
    HARD_LIGHT = "hard-light",
    DIFFERENCE = "difference",
    EXCLUSION = "exclusion",
    HUE = "hue",
    SATURATION = "saturation",
    COLOR = "color",
    LUMINOSITY = "luminosity",
    SOURCE_IN = "source-in",
    SOURCE_OUT = "source-out",
    SOURCE_ATOP = "source-atop",
    DESTINATION_OVER = "destination-over",
    DESTINATION_IN = "destination-in",
    DESTINATION_OUT = "destination-out",
    DESTINATION_ATOP = "destination-atop",
    DISSOLVE = "dissolve",
    LINEAR_BURN = "linear-burn",
    LINEAR_DODGE = "linear-dodge",
    DARKER_COLOR = "darker-color",
    LIGHTER_COLOR = "lighter-color",
    VIVID_LIGHT = "vivid-light",
    LINEAR_LIGHT = "linear-light",
    PIN_LIGHT = "pin-light",
    HARD_MIX = "hard-mix",
    SUBTRACT = "subtract",
    DIVIDE = "divide",
  }

  export interface IFill {
    readonly type: FillType;
    readonly color: IColor;
    readonly gradient: IGradient;
    readonly opacity: number;
    readonly blendMode: BlendMode;
    readonly fill: number;
  }

  export enum GradientType {
    LINEAR = "linear",
    RADIAL = "radial",
    ANGULAR = "angular",
  }

  export interface IGradient {
    readonly type: GradientType;
    readonly andle: number;
    readonly scale: number;
    readonly colorStops: ReadonlyArray<IColorStop>;
}

  export enum ILayerType {
    TEXT = "text",
    SHAPE = "shape",
    GROUP = "group",
  }

  export interface IRange {
    readonly start: number;
    readonly end: number;
  }

  export interface ITextStyleReference {
    readonly range: IRange;
    readonly textStyle: ITextStyle;
  }

  export interface ILayer {
    readonly type: ILayerType;
    readonly name: string;
    readonly rect: IRect;
    readonly fills: ReadonlyArray<IFill>;
    readonly borders: ReadonlyArray<IBorder>;
    readonly shadows: ReadonlyArray<IShadow>;
    readonly blur: IBlur;
    readonly opacity: number;
    readonly blendMode: BlendMode;
    readonly borderRadius: number;
    readonly location: number;
    readonly exportable: boolean;
    readonly assets: ReadonlyArray<IAsset>;
    readonly parent: ILayer;
    readonly version: IVersion;
    readonly content: string;
    readonly textStyles: ReadonlyArray<ITextStyleReference>;
    readonly layers: ReadonlyArray<ILayer>;
    readonly componentName: string;
  }

  export enum Platforms {
    WEB = "web",
    ANDROID = "android",
    IOS = "ios",
    OSX = "osx",
  }

  export enum LengthUnit {
    PX = "px",
    PT = "pt",
  }

  export enum TextLengthUnit {
    DP = "dp",
  }

  export interface IBaseProject {
    readonly type: Platforms;
    readonly name: string;
    readonly textStyles: ReadonlyArray<ITextStyle>;
    readonly colors: ReadonlyArray<IColor>;
    readonly density: string;
    readonly densityDivisor: number;
    readonly lengthUnit: LengthUnit;
    readonly textLengthUnit: TextLengthUnit;
  }

  export interface IProject extends IBaseProject {
    readonly linkedStyleguide?: IStyleguide;
    findTextStyleByName(name: string, useLinkedStyleguides?: boolean): ITextStyle;
    findTextStyleEqual(textStyle: ITextStyle, useLinkedStyleguides?: boolean): ITextStyle;
    findColorByName(name: string, useLinkedStyleguides?: boolean): IColor;
    findColorEqual(color: IColor, useLinkedStyleguides?: boolean): IColor;
    findColorByHexAndAlpha(values: IColorValues, useLinkedStyleguides?: boolean): IColor;
  }

  export interface IStyleguide extends IBaseProject {
    readonly parent?: IStyleguide;
    findTextStyleByName(name: string, useParentStyleguides?: boolean): ITextStyle;
    findTextStyleEqual(textStyle: ITextStyle, useParentStyleguides?: boolean): ITextStyle;
    findColorByName(name: string, useParentStyleguides?: boolean): IColor;
    findColorEqual(color: IColor, useParentStyleguides?: boolean): IColor;
    findColorByHexAndAlpha(values: IColorValues, useParentStyleguides?: boolean): IColor;
  }

  export interface IColorValues {
    readonly hex: string;
    readonly alpha: number;
  }

  export interface IScreen {
    readonly name: string;
    readonly description: string;
    readonly tags: ReadonlyArray<string>;
  }

  export enum ShadowType {
    OUTER = "outer",
    INNER = "inner",
  }

  export interface IShadow {
    readonly type: ShadowType;
    readonly offsetX: string;
    readonly offsetY: string;
    readonly blurRadius: number;
    readonly spread: number;
    readonly color: IColor;
  }

  export interface ITextStyle {
    readonly name: string;
    readonly fontFace: string;
    readonly fontSize: number;
    readonly fontWeight: number;
    readonly fontStyle: string;
    readonly fontFamily: string;
    readonly fontStretch: string;
    readonly lineHeight: number;
    readonly textAlign: string;
    readonly letterSpacing: number;
    readonly color: IColor;
    readonly weightText: string;
    euqals(t: ITextStyle): boolean;
  }

  export enum Source {
    SKETCH = "sketch",
    XD = "xd",
    FIGMA = "figma",
    PSD = "psd",
    BITMAP = "bitmap",
  }

  export enum DestinationType {
    SCREEN = "screen",
    PREVIOUS = "previous",
  }

  export interface IDestination {
    readonly name: string;
    readonly type: DestinationType;
  }

  export interface ILink {
    readonly rect: IRect;
    readonly destination: IDestination;
  }

  export interface IGridVertical {
    readonly gutterWidth: number;
    readonly columnWidth: number;
    readonly numberOfCols: number;
    readonly guttersOnOutside: boolean;
  }

  export interface IGridHorizontal {
    readonly gutterHeight: number;
    readonly rowHeight: number;
  }

  export interface IGrid {
    readonly horizontalOffset: number;
    readonly vertical: IGridVertical;
    readonly horizontal: IGridHorizontal;
  }

  export interface IVersion {
    readonly source: Source;
    readonly mage: IImage;
    readonly backgroundColor: IColor;
    readonly layers: ReadonlyArray<ILayer>;
    readonly links: ReadonlyArray<ILink>;
    readonly grid: IGrid;
    readonly componentNames: ReadonlyArray<string>;
  }

  export interface IImage {
    readonly url: string;
    readonly width: number;
    readonly height: number;
  }

  export interface IAsset {
    readonly density: string;
    readonly format: string;
  }

  export interface IRect {
    readonly x: number;
    readonly y: number;
    readonly width: number;
    readonly height: number;
  }

  export interface IHexColor {
    readonly r: number;
    readonly g: number;
    readonly b: number;
    readonly a: number;
  }
  export interface IHslColor {
    readonly h: number;
    readonly s: number;
    readonly l: number;
  }

  export interface ICodeObject {
    readonly code: string;
    readonly language: string;
  }

  export interface ICodeExportObject {
    readonly code: string;
    readonly language: string;
    readonly filename: string;
  }
}
