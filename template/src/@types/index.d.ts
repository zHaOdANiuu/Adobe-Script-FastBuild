declare const thisObj: $.global | Panel

declare const NORMALIZE: 0xff

declare const JSON: {
  stringify(
    value: unknown,
    replacer?: (key: string, value: unknown) => unknown,
    space?: string | number
  ): string
  parse(text: string, reviver?: (key: unknown, value: unknown) => unknown): unknown
}

declare function atob(encodedString: string): string

declare function btoa(rawString: string): string

declare function setInterval(handler: () => void, timeout: number): number

declare function clearInterval(id: number): void

declare function setTimeout(handler: () => void, timeout: number): number

declare function clearTimeout(id: number): void

declare type Container = Panel | Group | Window

declare interface TreeView {
  readonly items: (ListItem | TreeViewNode)[]
  readonly children: (ListItem | TreeViewNode)[]
  selection: TreeViewNode | ListItem
  onDoubleClick(): void
}

declare interface TreeViewNode extends ListItem {
  readonly index: number
  readonly items: (ListItem | TreeViewNode)[]
  readonly type: 'node'
  readonly parent: TreeViewNode | TreeView
  image: File | ScriptUIImage | string
  add(type: 'node', text?: string): TreeViewNode
  add(type: 'item', text?: string): ListItem
  add(type: 'node' | 'item', text?: string): TreeViewNode | ListItem
  remove(what: any): void
  removeAll(): void
}
