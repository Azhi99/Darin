export { default as Copyright } from '../..\\components\\Copyright.vue'
export { default as FooterArea } from '../..\\components\\FooterArea.vue'
export { default as HeaderArea } from '../..\\components\\HeaderArea.vue'
export { default as Partners } from '../..\\components\\Partners.vue'
export { default as DashboardNavbar } from '../..\\components\\dashboard\\Navbar.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
