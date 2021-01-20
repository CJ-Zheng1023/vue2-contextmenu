// 主菜单位置矫正
export const fixPosition = (x, y, target) => {
  const windowHeight = height(window)
  const windowWidth = width(window)
  const targetHeight = height(target)
  const targetWidth = width(target)
  const realX = Math.min(x, windowWidth - targetWidth)
  const realY = Math.min(y, windowHeight - targetHeight)
  return { realX, realY }
}
// 副菜单位置矫正
export const fixSubPosition = (parent, target) => {
  const windowHeight = height(window)
  const windowWidth = width(window)
  const parentOffsetX = parent.getBoundingClientRect().left
  const parentOffsetY = parent.getBoundingClientRect().top
  const parentWidth = width(parent)
  const targetHeight = height(target)
  const targetWidth = width(target)
  const xObj = parentOffsetX + parentWidth + targetWidth > windowWidth ? { right: '100%', left: 'auto', transform: 'translate(5px)' } : { left: '100%', rigth: 'auto', transform: 'translate(-5px)' }
  const yObj = parentOffsetY + targetHeight > windowHeight ? { top: windowHeight - parentOffsetY - targetHeight + 'px' } : { top: '0' }
  return Object.assign(xObj, yObj)
}
const height = el => {
  return el === window ? window.innerHeight : el.getBoundingClientRect().height
}
const width = el => {
  return el === window ? window.innerWidth : el.getBoundingClientRect().width
}
