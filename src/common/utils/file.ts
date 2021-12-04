const fs = window.require('fs')
const fsPromiseAPIs = window.require('fs').promises

const fileAction = {
  /**
   * @description 读取文件内容
   * @param path 
   * @param encoding 
   * @returns {Promise}
   */
  read: (path: string, encoding?: BufferEncoding): Promise<string> => {
    return fsPromiseAPIs.readFile(path, { encoding: encoding || 'utf8' });
  },
  /**
   * @description 写入文件内容
   * @param path 
   * @param content 
   * @param encoding 
   * @returns {Promise}
   */
  write: (path: string, content: string, encoding?: BufferEncoding): Promise<void> => {
    return fsPromiseAPIs.writeFile(path, content, { encoding: encoding || 'utf8' });
  },
  /**
   * @description 重命名文件
   * @param oldPath 
   * @param newPath 
   * @returns {Promise}
   */
  rename: (oldPath: string, newPath: string) => {
    return fsPromiseAPIs.rename(oldPath, newPath);
  },
  /**
   * @description 删除文件
   * @param path 
   * @returns {Promise}
   */
  delete: (path: string) => {
    return fsPromiseAPIs.unlink(path);
  },
  /**
   * @description 判断是否存在文件
   * @param path 
   * @returns {Promise}
   */
  hasFile: (path: string) => {
    return fsPromiseAPIs.access(path, fs.constants.F_OK);
  },
  /**
   * @description 判断文件是否可以写入
   * @param path 
   * @returns {promise}
   */
  canWrite: (path: string) => {
    return fsPromiseAPIs.access(path, fs.constants.W_OK);
  },
  /**
   * @description 判断文件是否可以读取
   * @param path 
   * @returns {Promise}
   */
  canRead: (path: string) => {
    return fsPromiseAPIs.access(path, fs.constants.R_OK);
  },
};

export default fileAction;
