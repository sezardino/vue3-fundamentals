import { mount } from '@vue/test-utils'
import EventCard from '@/components/EventCard.vue'

const mockEvent = {
  id: 123,
  title: 'Cat Adoption Day',
  date: 'January 28, 2022',
  time: '12:00'
}

describe('test', () => {
  it('test', () => {
    const wrapper = mount(EventCard, { props: { event: mockEvent } })
    const wrapperHTML = wrapper.html()

    expect(wrapperHTML).toContain(mockEvent.title)
    expect(wrapperHTML).toContain(mockEvent.date)
    expect(wrapperHTML).toContain(mockEvent.time)
  })
})
