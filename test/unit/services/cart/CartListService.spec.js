import cartListService from '@/services/Cart/CartListService'
import {cartItemsData} from '../../mocks/cartItemsMock'

describe('CartListService unit test', () => {

  it('should return amount of cartItems', () => {
    expect(cartListService.getAmount(cartItemsData)).toBe("543.89")
  })
})
