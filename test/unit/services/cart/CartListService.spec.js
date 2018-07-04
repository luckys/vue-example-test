import cartListService from '@/services/Cart/CartListService'
import {cartListsData} from '../../components/cart/specs/cartListMock'

describe('CartListService unit test', () => {

  it('should return amount of cartItems', () => {
    expect(cartListService.getAmount(cartListsData)).toBe("543.89")
  })
})
