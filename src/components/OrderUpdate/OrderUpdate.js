/* UPDATE - CHANGE DELIVERY */
import React from 'react'
import { orderUpdate } from '../../api/orders'

const OrderUpdate = (props) => {
  const [order, setOrder] = useState([])

  useEffect(() => {
    orderUpdate(user) // axios request
      .then(res => { setOrder })
  })
}
