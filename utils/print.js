/**
 * 执行打印操作
 * @params dom 需要被打印的元素
 */
export default (dom = document.body) => {
  if (!(dom instanceof HTMLElement)) {
    throw new Error('传入参数不是一个HTML元素')
  }
  const iframe = document.createElement('iframe')
  iframe.setAttribute('style', 'height: 0;width:0;')
  document.body.appendChild(iframe)
  const ifwin = iframe.contentWindow
  ifwin.document.write(`
  <html>
    ${window.document.head.innerHTML}
    <body>
      ${dom.getInnerHTML()}
    </body>
  </html>
  `)
  ifwin.addEventListener('afterprint', () => {
    iframe.remove()
  })
  setTimeout(() => {
    ifwin.print()
  }, 50)
}
