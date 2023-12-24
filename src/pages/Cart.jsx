import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Cart = () => {


    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {carts} = useSelector(state => state.carts)
    
    console.log(carts ,"carts");
    
    useEffect(()=> {
      dispatch(getCartTotal())
    },dispatch)
    

  return (
    <div>Cart</div>
  )
  }

export default Cart