import SearchInput from '@/components/Widgets/SearchInput'
import { shallowMount } from '@vue/test-utils'

describe('SearchInput Component', () => {
  let wrapper;
  const searchEntered = 'product 1'

  beforeEach(() => {
    wrapper = shallowMount(SearchInput, {
      propsData: {
        search: searchEntered
      }
    })
  })

  it('should return true if component is an vue instance', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })
})
