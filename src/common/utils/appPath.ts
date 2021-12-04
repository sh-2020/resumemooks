// @ts-ignore
const ipcRenderer = window.electron.ipcRenderer
/**
 * @description 获取项目绝对路径
 * @returns {Promise<string>}
 */
export function getAppPath(): Promise<string> {
  return new Promise((resolve: (value: string) => void, reject: (value: Error) => void) => {
    ipcRenderer.send('get-root-path', '');
    ipcRenderer.on('reply-root-path', (event: any, arg: string) => {
      if (arg) {
        resolve(arg)
      }else {
        reject(new Error('项目路径错误'));
      }
    })
  })
}
