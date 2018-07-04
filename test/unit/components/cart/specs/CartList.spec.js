import CartList from '@/components/Cart/CartList'
import CartListItem from '@/components/Cart/CartListItem'
import { mount } from '@vue/test-utils'
import { cartListsData } from './cartListMock'

describe('CartList component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(CartList, {
      propsData: {
        cartItems: cartListsData
      },
      slots: {
        title: '<h3>Cart</h3>'
      }
    })
  })

  it('should return true if component is an vue instance', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })

  it('should render 3 instance of CartListItem component', () => {
    expect(wrapper.contains(CartListItem)).toBe(true)
    expect(wrapper.findAll(CartListItem).length).toEqual(3)
  })

  it('should render one slot with Cart as content', () => {
    expect(wrapper.find('h3').text()).toBe('Cart')
  })

  it('should render total price', () => {
    expect(wrapper.find('strong').text()).toBe('Total: 543.89 €')
  })
  it('should emit an event when remove button is clicked', () => {
    const buttonWrapper = wrapper.find('button');
    buttonWrapper.trigger('click')
    expect(wrapper.emitted('cart-item-removed')).toBeTruthy()
    expect(wrapper.emitted('cart-item-removed')[0]).toEqual([cartListsData[0].id])
  })
})
