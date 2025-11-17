import { definePrefabKnowledge } from '@dsl/knowledge'

export default definePrefabKnowledge((utils) => {
  utils.name('arc')
  utils.description('A circular arc (curved line segment) defined by center, radius, and angle range.')
  utils.prop('center').describe('The center point of the circle containing the arc.').type('[number, number]')
  utils.prop('radius').describe('The radius of the arc.').type('number')
  utils.prop('startAngle').describe('The starting angle in degrees (0° is right, 90° is down).').type('number')
  utils.prop('endAngle').describe('The ending angle in degrees.').type('number')
  utils.prop('color').describe('The color of the arc.').type('string').optional('"primary"')
  utils.prop('label').describe('Optional label to display near the arc (supports LaTeX).').type('string').optional()
  utils.prop('labelColor').describe('The color of the label text.').type('string').optional()
})

