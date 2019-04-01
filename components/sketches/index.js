import sketch0001 from './0001-jagged-line/0001-jagged-line'
import sketch0002 from './0002-line-form/0002-line-form'
import sketch0003 from './0003-recursive-jagged-lines/0003-recursive-jagged-lines'
import sketch0004 from './0004-recursive-jagged-lines/0004-recursive-jagged-lines'
import sketch0005 from './0005-grid-iderator/0005-grid-iderator'
import sketch0017 from './0017-color-division-pick/0017-color-division-pick'

let sketches = [
  {
    sketch: sketch0001,
    title: 'Jagged Line',
    slug: 'jagged-line',
    published: false
  },
  {
    sketch: sketch0002,
    title: 'Line Form',
    slug: 'line-form',
    published: true
  },
  {
    sketch: sketch0003,
    title: 'Jagged Line Recurse',
    slug: 'jagged-line-recurse',
    published: true
  },
  {
    sketch: sketch0004,
    title: 'Jagged Line Recurse 02',
    slug: 'jagged-line-recurse-02',
    published: true
  },
  {
    sketch: sketch0005,
    title: 'Grid Iterate Circles',
    slug: 'grid-iterate-circles',
    published: true
  },
  {
    sketch: sketch0017,
    title: 'Color Division Pick',
    slug: 'color-division-pick',
    published: true,
    featured: true
  }
]

// asdf
// for(let i = 0; i < 3; i++) {
//   sketches = [...sketches, ...sketches];
// }

export default sketches
