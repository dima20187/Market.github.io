import React from 'react'
import { useDispatch } from 'react-redux'
import { increment } from '../../../../store/slice/CouterSlice'
import { CATEGORIES } from '../../../../Assets/BurgerImage/image/Categories'
import '../styles/Burger.css'
import { Button }from '../../../../ui-kit/Buttons/Button'

const {CHEESEBURGER} = CATEGORIES
const CheeseBurger = () => {
  
    const dispatch=useDispatch()

    return (
    <div className='angus_container' >
        <div className='angus_page'>
            <div className='angus' >
                <img className='angus_image' src={CHEESEBURGER} alt='/' />
                <div className='ves'>
                    <p>Вес: 114г</p>
                
                </div>
                <div className='over' >
                    <p className='sostav_p' >На 100 г продукта:</p>
                
                <div className='sostav'>
                    <div className='bgu'>
                        <p className='sostav_name' >кКал</p>
                        <p className='sostav_gram' >228</p>
                    </div>
                    <div className='bgu'>
                        <p className='sostav_name' >Белки</p>
                        <p className='sostav_gram' >9.7 г</p>
                    </div>
                    <div className='bgu'>
                        <p className='sostav_name' >Жиры</p>
                        <p className='sostav_gram' >9.8 г</p>
                    </div>
                    <div className='bgu'>
                        <p className='sostav_name' >Углев.</p>
                        <p className='sostav_gram' >25.8 г</p>
                        
                    </div>
                                   
                </div>
                <div className='opis' >
                    <p className='opis_name ves' >Может содержать аллергены:</p>
                        <p className='opis_p' >Соус Горчичный – горчица и продукты её переработки; Кетчуп – сельдерей; Булочка – кунжут, глютен пшеничный. Сыр плавленный - молоко и продукты его переработки.
                        </p>
                    </div>  

                </div>
            </div>
            <div className='angus_infa' >
                <div className='angus_information'>
                    <div className='rr' >
                    <h1 className='angus_name' >ЧизБургер</h1>
                    <h1 className='angus_price' >3.59 руб.</h1>
                    </div>
                    <div className='angus_details' >
                        <p className='angus_details_infa' >Информация</p>
                        <p className='angus_ditails_opis' >Вы не ошибетесь, выбирая Чизбургер: это фирменная приготовленная на огне говядина с ломтиком слегка расплавленного сыра, хрустящий огурчик, желтой горчицей, свежим луком и кетчупом, которые подаются в подрумяненной булочке с кунжутной посыпкой.</p>
                                        
                    </div>
                    <Button onClick={()=>dispatch(increment({name:'ЧизБургер',image:CHEESEBURGER,price:3.59,quantity: 1}))} >В корзину</Button>
                </div>
            </div>
            

        </div>
    </div>
  )
}

export {CheeseBurger}