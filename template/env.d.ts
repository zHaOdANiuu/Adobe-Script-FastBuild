/// <reference types="./src/@types/index.d.ts" />
/// <reference types="types-for-adobe/AfterEffects/23.0" />

declare module '*.jsxinc' {
  const src: unknown
  export default src
}

declare module '*.jsxbin' {
  const src: unknown
  export default src
}

declare module '*.res' {
  const src: string
  export default src
}

declare module '*.json' {
  const src: Record<string, unknown>
  export default src
}

declare module '*.jpg' {
  const src: string
  export default src
}

declare module '*.png' {
  const src: string
  export default src
}

declare module '*.ffx' {
  const src: string
  export default src
}

declare module '*.aep' {
  const src: string
  export default src
}

declare const Custom: unknown

declare function watch(name: string, func: typeof Function): void

declare function unwatch(name: string): void

declare type CustomBoundedValue = Slider

declare type CustomButton = Button & IconButton & Checkbox

declare type CustomView = Image

declare type FileOpenMode = 'r' | 'w' | 'e' | 'a'

declare type FileEncoding =
  | 'UCS-2BE'
  | 'UCS-2LE'
  | 'UCS4-BE'
  | 'UCS-4LE'
  | 'UTF-8'
  | 'BINARY'
  | 'TEXT'

declare type ElementType =
  | 'button'
  | 'iconbutton'
  | 'edittext'
  | 'statictext'
  | 'image'
  | 'listbox'
  | 'treeview'
  | 'dropdownlist'
  | 'slider'
  | 'scrollbar'
  | 'checkbox'
  | 'panel'
  | 'group'
  | 'tabbedpanel'
  | 'custombutton'
  | 'customview'
  | 'customboundedvalue'

declare interface $ {
  unwatch(name: string): void
  watch(name: string, func: Function): void
}

declare interface ElementMap {
  button: Button
  iconbutton: IconButton
  edittext: EditText
  statictext: StaticText
  image: Image
  listbox: ListBox
  treeview: TreeView
  dropdownlist: DropDownList
  slider: Slider
  scrollbar: ScrollBar
  checkbox: Checkbox
  panel: Panel
  group: Group
  tabbedpanel: TabbedPanel
  custombutton: CustomButton
  customview: CustomView
  customboundedvalue: CustomBoundedValue
}

declare interface Keyframe {
  property: Property
  keyTime: number
  keyValue: unknown | null
  keySelected?: boolean | null
  keyInTemporalEase?: InTemporalEase | null
  keyOutTemporalEase?: OutTemporalEase | null
  keyTemporalContinuous?: boolean | null
  keyTemporalAutoBezier?: boolean | null
  keyInInterpolationType?: KeyframeInterpolationType | null
  keyOutInterpolationType?: KeyframeInterpolationType | null
  keyInSpatialTangent?: InSpatialTangent | null
  keyOutSpatialTangent?: OutSpatialTangent | null
  keySpatialAutoBezier?: boolean | null
  keySpatialContinuous?: boolean | null
  keyRoving?: boolean | null
  keyLabel?: number | null
}

declare interface ArrayLike<T> {
  readonly [n: number]: T
  readonly length: number
}

declare interface AVLayer {
  readonly source: {
    readonly mainSource: SolidSource | FileSource | PlaceholderSource
  }
}

declare interface ShapeLayer {
  readonly Contents: PropertyGroup
}

declare interface FootageSource {
  readonly mainSource: SolidSource | FileSource | PlaceholderSource
}

declare interface XML {
  appendChild(child: XML): XML & XML[]
  attribute(name: string | number): XML & XML[]
  attributes(): XML & XML[]
  child(name: string | number): XML & XML[]
  children(): XML & XML[]
}

declare interface File {
  encoding: FileEncoding
  open(mode: FileOpenMode, type?: string, creator?: string): boolean
}

declare interface Function {
  apply(thisObj: unknown, args: unknown): unknown
  call(thisObj: object, ...arguments: unknown[]): unknown
}

declare interface StringConstructor {
  fromCharCode(...codes: number[]): string
}

declare interface String {
  replace(searchValue: RegExp, replaceValue: (substring: string, ...args: string[]) => void): string
  replace(searchValue: string, replaceValue: (substring: string) => void): string
  split(delimiter: RegExp | string, limit?: number): string[]
}

declare interface RegExp {
  source: string
  lastIndex: number
  global: boolean
}

declare interface Error {
  end: number
  fileName: string
  line: number
  message: string
  name: string
  number: number
  source: string
  start: number
}

declare interface _Control {
  addEventListener(
    eventName:
      | 'move'
      | 'moving'
      | 'mousedown'
      | 'mouseup'
      | 'mousemove'
      | 'mouseover'
      | 'mouseout'
      | 'click',
    handler: (Event: MouseEvent) => unknown,
    capturePhase?: boolean
  ): boolean
  addEventListener(
    eventName: 'enterKey' | 'keydown' | 'keyup',
    handler: (Event: KeyboardEvent) => unknown,
    capturePhase?: boolean
  ): boolean
  addEventListener(
    eventName: 'change' | 'changing' | 'resize' | 'resizing' | 'show' | 'focus' | 'blur',
    handler: (Event: Event) => unknown,
    capturePhase?: boolean
  ): boolean
}

declare interface _AddControl {
  (resString: string): _Control
  (type: 'customboundedvalue', bounds?: _Bounds): CustomBoundedValue
  (type: 'custombutton', bounds?: _Bounds): CustomButton
  (type: 'customview', bounds?: _Bounds): CustomView
}

declare interface _AddControlPropertiesEditText {
  /** 原来的scrollable是错误的 */
  scrolling?: boolean
}

declare interface Image {
  text: string
  notify(eventName?: string): void
}

declare interface Window {
  update(): void
}

declare interface ListItem {
  readonly type: 'item'
  image: File | ScriptUIImage | string
}

declare interface TabbedPanel {
  remove(what: unknown): void
}

declare interface UIEvent {
  readonly target: unknown
}

declare interface MouseEvent extends UIEvent {
  altKey: boolean
  button: number
  clientX: number
  clientY: number
  ctrlKey: boolean
  detail: number
  metaKey: boolean
  relatedTarget: unknown
  screenX: number
  screenY: number
  shiftKey: boolean
  type: string
  getModifierState(keyIdentifier: string): boolean
  initMouseEvent(
    eventName: string,
    bubble: boolean,
    isCancelable: boolean,
    view: unknown,
    detail: number,
    screenX: number,
    screenY: number,
    clientX: number,
    clientY: number,
    ctrlKey: boolean,
    altKey: boolean,
    shiftKey: boolean,
    metaKey: boolean,
    button: number,
    relatedTarget?: unknown
  ): void
}
