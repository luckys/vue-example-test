import ProductsPage from '@/pages/ProductsPage'
import CartList from '@/components/Cart/CartList'
import { mount } from '@vue/test-utils'

describe('Products Page Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(ProductsPage, {
      setData: {
        products: []
      }
    })
  })

  it('should return true if component is an vue instance', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })

  it('should render 1 instance of CartList component', () => {
    expect(wrapper.contains(CartList)).toBe(true)
    expect(wrapper.findAll(CartList).length).toEqual(1)
  })
})
