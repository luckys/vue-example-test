import ProductListItem from '@/components/Product/ProductListItem'
import { shallowMount } from '@vue/test-utils'
import { productListsData } from '../../../mocks/productListMock'

describe('ProductListItem component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(ProductListItem, {
      propsData: {
        id: productListsData[0].id,
        title: productListsData[0].title,
        price: productListsData[0].price,
        image: productListsData[0].image,
      }
    })
  })

  it('should return true if component is an vue instance', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })

  it('should contains all props', () => {
    expect(wrapper.props().id).toBe(productListsData[0].id)
    expect(wrapper.props().title).toBe(productListsData[0].title)
    expect(wrapper.props().price).toBe(productListsData[0].price)
    expect(wrapper.props().image).toBe(productListsData[0].image)
  })

  it('should render title, price and image props', () => {
    expect(wrapper.html().includes(productListsData[0].title)).toBe(true)
    expect(wrapper.html().includes(productListsData[0].price)).toBe(true)
    expect(wrapper.html().includes(productListsData[0].image)).toBe(true)
  })

  it('should render a button', () => {
    const buttonWrapper = wrapper.find('button');
    expect(buttonWrapper.is('button')).toBe(true)
  })

  it('should emit an event when button is clicked', () => {
    const buttonWrapper = wrapper.find('button');
    buttonWrapper.trigger('click')
    expect(wrapper.emitted('added-item')).toBeTruthy()
    expect(wrapper.emitted('added-item')[0]).toEqual([productListsData[0].id])
  })
})
