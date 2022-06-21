/**
 * 根据获取到的二进制数据或字符串下载文件
 * @params data 二进制数据或字符串
 * @params fileName 文件名
 */
export default (data, fileName) => {
  const blob = new Blob([data])
  const url = window.URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.download = fileName || 'file'
  a.style.display = 'none'
  a.href = url
  document.body.appendChild(a)
  a.click()
  a.remove()
}
