import { tag } from '@dsl/utils-canvas'
import { definePrefab, ref, registerPrefab } from '@dsl/renderer-core'
import type { Vector2 } from '../utils'
import { theme } from '@dsl/utils-theme'
import { calculateTicks } from '../utils/ticks'

export interface PlaneAttributes {
  range: Vector2
  domain: Vector2
  axis: boolean
  grid: boolean
  flexible: boolean
}

export const plane = definePrefab<'plane', PlaneAttributes>(() => {
  const aspectWidth = ref(1)
  const aspectHeight = ref(-1)
  return {
    name: 'plane',
    generator(attrs, children, { mount }) {
      const { range, domain } = attrs
      const container = document.createElement('div')
      // 使用绝对定位和 100% 宽高确保填满父容器
      container.style.width = '100%'
      container.style.height = '100%'
      container.style.position = 'relative'
      container.style.overflow = 'hidden'

      const canvas = tag('svg')
      canvas.attr('width', '100%')
      canvas.attr('height', '100%')
      canvas.node().style.display = 'block'

      const root = tag('g')
      canvas.append(root.node())

      // 分层管理：网格 -> 子元素 -> 坐标轴 -> 刻度文本
      const gridGroup = tag('g')
      const childrenGroup = tag('g')
      const axisGroup = tag('g')
      const labelGroup = tag('g')

      root.append(gridGroup.node())
      root.append(childrenGroup.node())
      root.append(axisGroup.node())
      root.append(labelGroup.node())

      childrenGroup.node().append(...children())
      container.appendChild(canvas.node())

      const update = () => {
        const { width, height } = container.getBoundingClientRect()
        if (width === 0 || height === 0) return

        const mathW = domain[1] - domain[0]
        const mathH = range[1] - range[0]

        // 计算缩放比例，始终保持宽高比（Isotropic）
        // Fit Inside 策略：确保指定的 domain/range 完全可见
        const scaleX = width / mathW
        const scaleY = height / mathH
        const scale = Math.min(scaleX, scaleY)

        // 计算居中偏移
        const contentScreenW = mathW * scale
        const contentScreenH = mathH * scale
        const paddingX = (width - contentScreenW) / 2
        const paddingY = (height - contentScreenH) / 2

        // 计算原点在屏幕上的位置
        // 左边界 domain[0] 对应 paddingX => originX + domain[0] * scale = paddingX
        const originX = paddingX - domain[0] * scale
        // 下边界 range[0] 对应 height - paddingY (屏幕Y向下) => originY - range[0] * scale = height - paddingY
        const originY = height - paddingY + range[0] * scale

        // 应用变换
        root.attr('transform', `translate(${originX}, ${originY})`)

        // 更新 Context
        aspectWidth.value = scale
        aspectHeight.value = -scale

        // 绘制辅助元素
        drawGridAndAxis(scale, originX, originY, width, height)
      }

      const drawGridAndAxis = (scale: number, originX: number, originY: number, width: number, height: number) => {
        gridGroup.node().innerHTML = ''
        axisGroup.node().innerHTML = ''
        labelGroup.node().innerHTML = ''

        if (!attrs.grid && !attrs.axis) return

        // 计算可视范围（数学坐标）
        // screenX = originX + mathX * scale => mathX = (screenX - originX) / scale
        // screenY = originY - mathY * scale => mathY = (originY - screenY) / scale
        const visibleMinX = (0 - originX) / scale
        const visibleMaxX = (width - originX) / scale
        const visibleMinY = (originY - height) / scale
        const visibleMaxY = (originY - 0) / scale // originY / scale

        // 生成漂亮的刻度
        // 稍微放宽范围以确保覆盖边缘
        const xTicks = calculateTicks(visibleMinX, visibleMaxX, 10)
        const yTicks = calculateTicks(visibleMinY, visibleMaxY, 10)

        const color = theme.pallete('primary')

        if (attrs.grid) {
          xTicks.forEach(x => {
            const screenX = x * scale
            const line = tag('line')
            // 绘制贯穿整个可视区域的网格线
            // 由于 root 已经 translate，这里的坐标是相对于 origin 的
            // 也就是 x 轴位置是 screenX (相对 originX)
            // y 轴位置要覆盖从 visibleMinY 到 visibleMaxY
            line.attr('x1', `${screenX}`)
            line.attr('x2', `${screenX}`)
            line.attr('y1', `${-visibleMaxY * scale}`)
            line.attr('y2', `${-visibleMinY * scale}`)
            line.attr('stroke', color)
            line.attr('stroke-width', '1')
            line.attr('stroke-opacity', '0.15')
            gridGroup.append(line.node())
          })

          yTicks.forEach(y => {
            const screenY = -y * scale
            const line = tag('line')
            line.attr('x1', `${visibleMinX * scale}`)
            line.attr('x2', `${visibleMaxX * scale}`)
            line.attr('y1', `${screenY}`)
            line.attr('y2', `${screenY}`)
            line.attr('stroke', color)
            line.attr('stroke-width', '1')
            line.attr('stroke-opacity', '0.15')
            gridGroup.append(line.node())
          })
        }

        if (attrs.axis) {
          // X Axis
          const xAxis = tag('line')
          xAxis.attr('x1', `${visibleMinX * scale}`)
          xAxis.attr('x2', `${visibleMaxX * scale}`)
          xAxis.attr('y1', '0')
          xAxis.attr('y2', '0')
          xAxis.attr('stroke', color)
          xAxis.attr('stroke-width', '2')
          axisGroup.append(xAxis.node())

          // Y Axis
          const yAxis = tag('line')
          yAxis.attr('x1', '0')
          yAxis.attr('x2', '0')
          yAxis.attr('y1', `${-visibleMaxY * scale}`)
          yAxis.attr('y2', `${-visibleMinY * scale}`)
          yAxis.attr('stroke', color)
          yAxis.attr('stroke-width', '2')
          axisGroup.append(yAxis.node())

          // Ticks & Labels
          const fontSize = 12

          xTicks.forEach(x => {
            if (Math.abs(x) < 1e-10) return // skip origin
            const screenX = x * scale

            const tick = tag('line')
            tick.attr('x1', `${screenX}`)
            tick.attr('x2', `${screenX}`)
            tick.attr('y1', '0')
            tick.attr('y2', '5')
            tick.attr('stroke', color)
            tick.attr('stroke-width', '2')
            axisGroup.append(tick.node())

            const text = tag('text')
            text.node().textContent = `${Number(x.toFixed(2))}` // 防止浮点数过长
            text.attr('x', `${screenX}`)
            text.attr('y', '20')
            text.attr('fill', color)
            text.attr('font-size', `${fontSize}px`)
            text.attr('text-anchor', 'middle')
            labelGroup.append(text.node())
          })

          yTicks.forEach(y => {
            if (Math.abs(y) < 1e-10) return // skip origin
            const screenY = -y * scale

            const tick = tag('line')
            tick.attr('x1', '0')
            tick.attr('x2', '-5')
            tick.attr('y1', `${screenY}`)
            tick.attr('y2', `${screenY}`)
            tick.attr('stroke', color)
            tick.attr('stroke-width', '2')
            axisGroup.append(tick.node())

            const text = tag('text')
            text.node().textContent = `${Number(y.toFixed(2))}`
            text.attr('x', '-8')
            text.attr('y', `${screenY + fontSize * 0.35}`) // vertical align center approx
            text.attr('fill', color)
            text.attr('font-size', `${fontSize}px`)
            text.attr('text-anchor', 'end')
            labelGroup.append(text.node())
          })

          // Origin label
          const originText = tag('text')
          originText.node().textContent = 'O'
          originText.attr('x', '-5')
          originText.attr('y', '15')
          originText.attr('fill', color)
          originText.attr('font-size', `${fontSize}px`)
          originText.attr('text-anchor', 'end')
          labelGroup.append(originText.node())
        }
      }

      const updateLayout = () => {
        const observer = new ResizeObserver(() => {
          requestAnimationFrame(update)
        })
        observer.observe(container)
        // Initial update: immediately call update to handle synchronous layout scenarios (like node replacement)
        update()
        requestAnimationFrame(update)
      }
      mount(updateLayout)
      updateLayout()

      return container
    },
    defaults: {
      axis: true,
      grid: true,
      flexible: true,
    },
    provides: {
      aspectWidth,
      aspectHeight,
    }
  }
})

export type PlaneProvides = {
  aspectWidth: number
  aspectHeight: number
}

registerPrefab('plane', plane)
