import { mount } from '@vue/test-utils'
import store from '@/store'
import router from '@/router'

import EventList from '@/views/EventList.vue'

let wrapper
beforeEach(() => {
  wrapper = mount(EventList, { global: { plugins: [store, router] } })
})

describe('EventList', () => {
  it('renders correctly', () => {
    expect(wrapper.exists()).toBe(true)
  })

  describe('page title', () => {
    it('renders with correct text', () => {
      const pageTitle = wrapper.find('[data-testid="page-title"]').text()

      expect(pageTitle).toEqual('Events for Good')
    })
  })
})
