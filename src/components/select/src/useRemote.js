export default function (props, options, loading) {
  const remoteProps = {
    remote: props.remote
  }
  if (props.remote) {
    remoteProps.remoteMethod = function (queryStr) {
      if (!queryStr) {
        if (!props.initLoad) {
          options.value = []
        }
        return false
      } else {
        loading.value = true
        const promise = props.dataSource(queryStr)
        if (promise instanceof Promise) {
          promise
            .then(data => {
              if (data instanceof Array) {
                options.value = data
              } else {
                throw new Error('Promise.resolve的参数应当是一个数组')
              }
            })
            .finally(() => {
              loading.value = false
            })
        } else {
          loading.value = false
          throw new Error('dataSource方法应当返回一个Promise')
        }
      }
    }
  }
  return { remoteProps }
}
