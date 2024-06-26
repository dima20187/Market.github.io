import React from 'react'
import { useDispatch } from 'react-redux'
import { increment } from '../../../../store/slice/CouterSlice'
import { CATEGORIES } from '../../../../Assets/BurgerImage/image/Categories'
import '../styles/Burger.css'
import { Button }from '../../../../ui-kit/Buttons/Button'

const {SWEDISHBURGER} = CATEGORIES

const SwedishBurger = () => {

    const dispatch =useDispatch()

  return (
    <div className='angus_container' >
        <div className='angus_page'>
            <div className='angus' >
                <img className='angus_image' src={SWEDISHBURGER} alt='' />
                <div className='ves'>
                    <p>Вес: 270г</p>
                
                </div>
                <div className='over' >
                    <p className='sostav_p' >На 100 г продукта:</p>
                
                <div className='sostav'>
                    <div className='bgu'>
                        <p className='sostav_name' >кКал</p>
                        <p className='sostav_gram' >232</p>
                    </div>
                    <div className='bgu'>
                        <p className='sostav_name' >Белки</p>
                        <p className='sostav_gram' >8.7 г</p>
                    </div>
                    <div className='bgu'>
                        <p className='sostav_name' >Жиры</p>
                        <p className='sostav_gram' >11.4 г</p>
                    </div>
                    <div className='bgu'>
                        <p className='sostav_name' >Углев.</p>
                        <p className='sostav_gram' >23.7 г</p>
                        
                    </div>
                                   
                </div>
                <div className='opis' >
                    <p className='opis_name ves' >Может содержать аллергены:</p>
                        <p className='opis_p' >Булочка - кунжут, глютен пшеничный. Сыр плавленный - молоко и продукты его переработки. Соус клюквенный - следы горчицы, яичного желтка, концентрата сывороточных белков, сои, кунжута. Возможно попадание частиц плодоножек и листьев клюквы. Соус Сырный - лактоза , продукты яичные. Лук жареный - слеы яиц, молока, сельдерея.
                        </p>
                    </div>  

                </div>
            </div>
            <div className='angus_infa' >
                <div className='angus_information'>
                    <div className='rr' >
                    <h1 className='angus_name' >Шведский Бургер</h1>
                    <h1 className='angus_price' >9.79 руб.</h1>
                    </div>
                    <div className='angus_details' >
                        <p className='angus_details_infa' >Информация</p>
                        <p className='angus_ditails_opis' >Шведский бургер с клюквенным соусом достоин звания высокой кухни! Сочный говяжий бифштекс, расплавленный сыр Чеддер, маринованные огурчики, хрустящий лук и листья салата заправляются сырным соусом и пряным клюквенным соусом из натуральных ягод. Подаётся на французской булочке бриошь.</p>
                                        
                    </div>
                    <Button onClick={()=>dispatch(increment({name:'Шведский Бургер',image:SWEDISHBURGER,price:9.79,quantity: 1}))} >В корзину</Button>
                </div>
            </div>
            

        </div>
    </div>
  )
}

export {SwedishBurger}