/**
 * @name 表单字段
 */
export class Field {
  /**
   *
   * @param {name, key, component, attrs, span, hide, itemAttrs} arg
   */
  constructor (arg) {
    const { name, key, component, attrs, span, hide, itemAttrs } = arg
    this.name = name
    this.key = key
    this.component = component
    this.attrs = attrs
    this.span = span
    this.hide = hide
    this.itemAttrs = itemAttrs
  }
}
