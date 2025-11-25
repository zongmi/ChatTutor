export const e1 = {
  id: 'e1',
  content: `
---
refs:
  a: 3
  b: 4
  c: 5
  col_a: 'rgba(52, 152, 219, 0.5)'
  col_b: 'rgba(46, 204, 113, 0.5)'
  col_c: 'rgba(231, 76, 60, 0.5)'
  text_col: '#333333'
---
<plane :domain="[-6, 9]" :range="[-5, 9]" :grid="true" :axis="true">

  <!-- Square on Leg A (Horizontal/Bottom) -->
  <!-- Points: (0,0) -> (a,0) -> (a,-a) -> (0,-a) -->
  <polygon 
    type="graph" 
    :points="[[0, 0], [a, 0], [a, -a], [0, -a]]" 
    :color="col_a"
  />
  <label 
    :x="a/2" 
    :y="-a/2" 
    :content="\`\\text{Area} = \${a}^2 = \${a*a}\`" 
    :color="text_col"
  />

  <!-- Square on Leg B (Vertical/Left) -->
  <!-- Points: (0,0) -> (0,b) -> (-b,b) -> (-b,0) -->
  <polygon 
    type="graph" 
    :points="[[0, 0], [0, b], [-b, b], [-b, 0]]" 
    :color="col_b"
  />
  <label 
    :x="-b/2" 
    :y="b/2" 
    :content="\`\\text{Area} = \${b}^2 = \${b*b}\`" 
    :color="text_col"
  />

  <!-- Square on Hypotenuse C (Slanted) -->
  <!-- Vector along hypotenuse is (-a, b). Normal is (b, a) -->
  <!-- Points: (a,0) -> (0,b) -> (0+b, b+a) -> (a+b, 0+a) -->
  <polygon 
    type="graph" 
    :points="[[a, 0], [0, b], [b, a+b], [a+b, a]]" 
    :color="col_c"
  />
  <label 
    :x="(a+b)/2" 
    :y="(a+b)/2" 
    :content="\`\\text{Area} = \${c}^2 = \${c*c}\`" 
    :color="text_col"
  />

  <!-- The Central Right Triangle (Drawn last to be on top) -->
  <polygon 
    type="line" 
    :points="[[0, 0], [a, 0], [0, b]]" 
    color="#000000"
  />
  
  <!-- Right Angle Marker -->
  <angle 
    :origin="[0, 0]" 
    :start="[a, 0]" 
    :end="[0, b]" 
    color="black"
  />

  <!-- Visual Equation at the bottom -->
  <label 
    :x="0" 
    :y="-a - 1.5" 
    :content="\`\\Large \${a*a} + \${b*b} = \${c*c}\`" 
    color="black"
  />

</plane>
`,
}