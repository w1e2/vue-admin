import defaultSettings from '@/settings' // 对应src-settings.js文件

const title = defaultSettings.title || '小慕读书' // src-settings.js文件里定义的title，若没设置则显示|| 后面的值

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}` // 显示为组件meta.title-title的格式
  }
  return `${title}`
}
