import React, { useReducer } from 'react'
import './Menu.css'

// const reducerFn = (prevState, action)=>{

// }

const products = [
    {
        id: 1,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyN95ZJYXeSqmJBYDLB8_hZpljdstDSFoiuQ&usqp=CAU',
        name: 'Клубника',
        price: 50,
    },
    {
        id: 2,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxPTvbWzYsyIggSkMdPp2TzWQz2FSO8jPJcQ&usqp=CAU',
        name: 'Апельсин',
        price: 74,
    },
    {
        id: 3,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2e_EWI1VMg6d3QuqgqG6E3Jii7L4I3js_CA&usqp=CAU',
        name: 'Киви',
        price: 59,
    }
]

const Menu = () => {

    // const [state, dispatch] = useReducer(reducerFn, {
    //     quantity
    // })

    // const { quantity } = state

  return (
    <table>
        <tr>
            <th>#</th>
            <th>Продукт</th>
            <th>Название продукта</th>
            <th>Цена</th>
            <th>Количество</th>
            <th>Удалить</th>
        </tr>
        {products.map((product)=>{
            return <tr>
                <td>{product.id}</td>
                <td><img src={product.img} alt="" width={30} height={30}/></td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td></td>
                <td></td>
            </tr>
        })}
    </table>
  )
}

export default Menu
