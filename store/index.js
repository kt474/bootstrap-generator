export const state = () => ({
  bootstrapComponents: [
    { name: 'Accordian', id: 1 },
    { name: 'Badge', id: 2 },
    { name: 'Breadcrumb', id: 3 },
    { name: 'Buttons', id: 4 },
    { name: 'Button group', id: 5 },
    { name: 'Card', id: 6 },
    { name: 'Carousel', id: 7 },
    { name: 'Dropdowns', id: 9 },
    { name: 'List group', id: 10 },
    { name: 'Modal', id: 11 },
    { name: 'Navs & tabs', id: 12 },
    { name: 'Navbar', id: 13 },
    { name: 'Pagination', id: 15 },
    { name: 'Progress', id: 17 },
    { name: 'Toasts', id: 18 },
  ],
  currentCanvas: [],
})

export const mutations = {
  updateCanvas(state, currentCanvas) {
    state.currentCanvas = currentCanvas
  },
  updateComponents(state, bootstrapComponents) {
    state.bootstrapComponents = bootstrapComponents
  },
}
