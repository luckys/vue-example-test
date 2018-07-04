import CartListItem from '@/components/Cart/CartListItem'
import { shallowMount } from '@vue/test-utils'
import { cartItemsData } from './cartItemsMock'

describe('CartListItem component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(CartListItem, {
      propsData: {
        id: cartItemsData[0].id,
        title: cartItemsData[0].title,
        price: cartItemsData[0].price
      }
    })
  })

  it('should return true if component is an vue instance', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })

  it('should contains all props', () => {
    expect(wrapper.props().id).toBe(cartItemsData[0].id)
    expect(wrapper.props().title).toBe(cartItemsData[0].title)
    expect(wrapper.props().price).toBe(cartItemsData[0].price)
  })

  it('should render title and price props', () => {
    expect(wrapper.html().includes(cartItemsData[0].title)).toBe(true)
    expect(wrapper.html().includes(cartItemsData[0].price)).toBe(true)
  })

  it('should render a button', () => {
    const buttonWrapper = wrapper.find('button');
    expect(buttonWrapper.is('button')).toBe(true)
  })

  it('should emit an event when button is clicked', () => {
    const buttonWrapper = wrapper.find('button');
    buttonWrapper.trigger('click')
    expect(wrapper.emitted('removed-item')).toBeTruthy()
    expect(wrapper.emitted('removed-item')[0]).toEqual([cartItemsData[0].id])
  })
})
