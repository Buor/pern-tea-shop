import React, { useEffect, useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import tea_cup from './../../../Styles/Images/Icons/tea-cup.svg'
import coffee from './../../../Styles/Images/Icons/coffee.svg'
import dishes from './../../../Styles/Images/Icons/dishes.svg'
import sweets from './../../../Styles/Images/Icons/sweets.svg'
import { GetTypesDTO } from '../../../../../@types/DTO/typeDTOs'
import { getTypes } from '../../../DAL/type/typeAPI'

const Sidebar: React.FC = () => {

    const history = useHistory()
    const [types, setTypes] = useState<GetTypesDTO[] | null>(null)

    useEffect(() => {
        (async () => {
            const types = await getTypes()
            setTypes(types)
        })()
    }, [])

    const goToProductPage = (productName: string) => {
        history.push('/category/' + productName)
    }

    return (
        <div className={'sidebar'}>
            <ul className={'categories_wrapper'}>
                {types && types?.map(type => {
                    return <li className={'category_item'} onClick={() => goToProductPage(type.name)}>
                        <img className={'category_image'} src={type.typeLogo || 'https://image.flaticon.com/icons/png/512/25/25333.png'} alt='cat_image' />
                        <NavLink className={'category_link'} to={'/category/' + type.name}>{type.name}</NavLink>
                    </li>
                })}
            </ul>
            <ul className='socials'>
                <li>
                    <img src='' alt='' />
                </li>
            </ul>
        </div>
    )
}
export default Sidebar