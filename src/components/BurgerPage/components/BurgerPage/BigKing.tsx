import React from 'react'
import { useDispatch } from 'react-redux'
import { increment } from '../../../../store/slice/CouterSlice'
import { CATEGORIES } from '../../../../Assets/BurgerImage/image/Categories'
import '../styles/Burger.css'
import { Button }from '../../../../ui-kit/Buttons/Button'

const {BIGKING}=CATEGORIES

const BigKing = () => {

    const dispatch =useDispatch()

  return (
    <div className='angus_container' >
        <div className='angus_page'>
            <div className='angus' >
                <img className='angus_image' src={BIGKING} alt='/' />
                <div className='ves'>
                    <p>Вес: 189г</p>
                
                </div>
                <div className='over' >
                    <p className='sostav_p' >На 100 г продукта:</p>
                
                <div className='sostav'>
                    <div className='bgu'>
                        <p className='sostav_name' >кКал</p>
                        <p className='sostav_gram' >220</p>
                    </div>
                    <div className='bgu'>
                        <p className='sostav_name' >Белки</p>
                        <p className='sostav_gram' >9.5 г</p>
                    </div>
                    <div className='bgu'>
                        <p className='sostav_name' >Жиры</p>
                        <p className='sostav_gram' >10.9 г</p>
                    </div>
                    <div className='bgu'>
                        <p className='sostav_name' >Углев.</p>
                        <p className='sostav_gram' >20.8 г</p>
                        
                    </div>
                                   
                </div>
                <div className='opis' >
                    <p className='opis_name ves' >Может содержать аллергены:</p>
                        <p className='opis_p' >"Бургер-Соус" - продукты переработки яиц, лактоза, следы сельдерея, горчицы. Булочка - кунжут, глютен пшеничный. Сыр плавленный - молоко и продукты его переработки.
                        </p>
                    </div>  

                </div>
            </div>
            <div className='angus_infa' >
                <div className='angus_information'>
                    <div className='rr' >
                    <h1 className='angus_name' >Биг Кинг</h1>
                    <h1 className='angus_price' >7.99 руб.</h1>
                    </div>
                    <div className='angus_details' >
                        <p className='angus_details_infa' >Информация</p>
                        <p className='angus_ditails_opis' >Этот сэндвич по праву носит свой титул. Он составлен с истинной королевской щедростью: в нем два приготовленных на огне фирменных бифштекса, ломтик сыра чеддер, огурчики, свежий нарезанный салат, лук и непревзойденный соус тартар. И все это в подрумяненной и посыпанной кунжутом булочке.</p>
                                        
                    </div>
                    <Button onClick={()=>dispatch(increment({name:'Биг Кинг',image:BIGKING,price:7.99,quantity: 1}))} >В корзину</Button>
                </div>
            </div>
            

        </div>
    </div>
  )
}

export {BigKing}