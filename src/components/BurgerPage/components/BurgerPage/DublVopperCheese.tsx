import React from 'react'
import { useDispatch } from 'react-redux'
import { increment } from '../../../../store/slice/CouterSlice'
import { CATEGORIES } from '../../../../Assets/BurgerImage/image/Categories'
import '../styles/Burger.css'
import { Button }from '../../../../ui-kit/Buttons/Button'

const {DABLPVOPPERCHEESE} = CATEGORIES

const DublVopperCheese = () => {

    const dispatch = useDispatch()

  return (
    <div className='angus_container' >
        <div className='angus_page'>
            <div className='angus' >
                <img className='angus_image' src={DABLPVOPPERCHEESE} alt='' />
                <div className='ves'>
                    <p>Вес: 372г</p>
                
                </div>
                <div className='over' >
                    <p className='sostav_p' >На 100 г продукта:</p>
                
                <div className='sostav'>
                    <div className='bgu'>
                        <p className='sostav_name' >кКал</p>
                        <p className='sostav_gram' >218</p>
                    </div>
                    <div className='bgu'>
                        <p className='sostav_name' >Белки</p>
                        <p className='sostav_gram' >9.8 г</p>
                    </div>
                    <div className='bgu'>
                        <p className='sostav_name' >Жиры</p>
                        <p className='sostav_gram' >13.9 г</p>
                    </div>
                    <div className='bgu'>
                        <p className='sostav_name' >Углев.</p>
                        <p className='sostav_gram' >13.5 г</p>
                        
                    </div>
                                   
                </div>
                <div className='opis' >
                    <p className='opis_name ves' >Может содержать аллергены:</p>
                        <p className='opis_p' >Майонез – яичный желток, следы сельдерея, молока, горчицы, и продуктов их переработки; Кетчуп – сельдерей; Булочка – кунжут, глютен пшеничный. Сыр поавленный - молоко и продукты его переработки
                        </p>
                    </div>  

                </div>
            </div>
            <div className='angus_infa' >
                <div className='angus_information'>
                    <div className='rr' >
                    <h1 className='angus_name' >Двойной Воппер с сыром</h1>
                    <h1 className='angus_price' >13.59 руб.</h1>
                    </div>
                    <div className='angus_details' >
                        <p className='angus_details_infa' >Информация</p>
                        <p className='angus_ditails_opis' >Двойной ВОППЕР®с сыром - это два аппетитных, приготовленных на огне бифштекса из 100% говядины, два нежных ломтика сыра, сочные помидоры, свежий нарезанный листовой салат, густой майонез, хрустящие маринованные огурчики и свежий лук на нежной булочке с кунжутом.</p>
                                        
                    </div>
                    <Button onClick={()=>dispatch(increment({name:'Двойной воппер с сыром',image:DABLPVOPPERCHEESE,price:13.59,quantity: 1}))} >В корзину</Button>
                </div>
            </div>
            

        </div>
    </div>
  )
}

export {DublVopperCheese}