/**
 * 将图片转为base64的url形式
 * @params file 图片文件
 */
export default file => {
  return new Promise((resolve, reject) => {
    if (!(file instanceof File)) {
      reject(new Error('传入参数不是File类型'))
    } else {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = function (e) {
        resolve(e.target.result)
      }
      reader.onerror = function (error) {
        reject(error)
      }
    }
  })
}
