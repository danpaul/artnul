/**
 * Keep `require` pattern to allow this file to be imported during static build
 */
const sketch0001 = process.client || process.server ? require('./0001-jagged-line/0001-jagged-line').default : null
const sketch0002 = process.client || process.server ? require('./0002-line-form/0002-line-form').default : null
const sketch0003 = process.client || process.server ? require('./0003-recursive-jagged-lines/0003-recursive-jagged-lines').default : null
const sketch0004 = process.client || process.server ? require('./0004-recursive-jagged-lines/0004-recursive-jagged-lines').default : null
const sketch0005 = process.client || process.server ? require('./0005-grid-iderator/0005-grid-iderator').default : null
const sketch0006 = process.client || process.server ? require('./0006-color-box/0006-color-box').default : null
const sketch0008 = process.client || process.server ? require('./0008-color-box-iterator/0008-color-box-iterator').default : null
const sketch0016 = process.client || process.server ? require('./0016-color-division/0016-color-division').default : null
const sketch0017 = process.client || process.server ? require('./0017-color-division-pick/0017-color-division-pick').default : null

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
    sketch: sketch0006,
    title: 'Color Box',
    slug: 'color-box',
    published: true
  },
  {
    sketch: sketch0008,
    title: 'Color Box Iterator',
    slug: 'color-box-iterator',
    published: true
  },
  {
    sketch: sketch0016,
    title: 'Color Division',
    slug: 'color-division',
    published: true,
    featured: false
  },
  {
    sketch: sketch0017,
    title: 'Color Division Pick',
    slug: 'color-division-pick',
    published: true,
    featured: true
  }
]

export default sketches
