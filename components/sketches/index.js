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
const sketch0018 = process.client || process.server ? require('./00018-color-box-iterator/00018-color-box-iterator').default : null
const sketch0019 = process.client || process.server ? require('./00019-color-box-palette/00019-color-box-palette').default : null
const sketch0020 = process.client || process.server ? require('./00020/line-test').default : null
const sketch0021 = process.client || process.server ? require('./0021-gui-test/0021-gui-test.vue').default : null
const sketch0022 = process.client || process.server ? require('./0022-color-box-iterator-2/0022-color-box-iterator-2.vue').default : null
const sketch0023 = process.client || process.server ? require('./0023-color-box-iterator-gui/0023-color-box-iterator-gui.vue').default : null
const sketch0024 = process.client || process.server ? require('./0024-box-iterator-points/0024-box-iterator-points.vue').default : null

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
    published: false
  },
  {
    sketch: sketch0003,
    title: 'Jagged Line Recurse',
    slug: 'jagged-line-recurse',
    published: false
  },
  {
    sketch: sketch0004,
    title: 'Jagged Line Recurse 02',
    slug: 'jagged-line-recurse-02',
    published: false
  },
  {
    sketch: sketch0005,
    title: 'Grid Iterate Circles',
    slug: 'grid-iterate-circles',
    published: false
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
    published: false
  },
  {
    sketch: sketch0016,
    title: 'Color Division',
    slug: 'color-division',
    published: false,
    featured: false
  },
  {
    sketch: sketch0017,
    title: 'Color Division Pick',
    slug: 'color-division-pick',
    published: true,
    featured: true
  },
  {
    sketch: sketch0018,
    title: 'Color Recurse Red',
    slug: 'color-recurse-red',
    published: true,
    featured: true
  },
  {
    sketch: sketch0019,
    title: 'Color Recurse Palette',
    slug: 'color-recurse-palette',
    published: false,
    featured: true
  },
  {
    sketch: sketch0020,
    title: 'Parallel Lines',
    slug: 'parallel-lines',
    published: false,
    featured: false
  },
  {
    sketch: sketch0021,
    title: 'GUI Test',
    slug: 'gui-test',
    published: false,
    featured: false
  },
  {
    sketch: sketch0022,
    title: 'Color Box Iterator 02',
    slug: 'color-box-iterator-02',
    published: false,
    featured: false
  },
  {
    sketch: sketch0023,
    title: 'Color Box Iterator 03',
    slug: 'color-box-iterator-03',
    published: false,
    featured: false
  },
  {
    sketch: sketch0024,
    title: 'Box Iterator Points',
    slug: 'box-iterator-points',
    published: false,
    featured: false
  }
]

export default sketches
