import React from 'react'
import Header from './header'
import Footer from './Footer'
import Button from './Button'

const Main = () => {
  return (
    <>
    
        <div className='container'>
            <div className='p-5 text-center bg-light-dark rounded'>
                <h1 className='text-light'>Stock prediction portal</h1>
                <p className='text-light'>A Stock Prediction Application is a software system that analyzes historical stock market data, trends, and financial indicators to forecast future stock prices or movements.
It leverages data analytics, machine learning, and visualization techniques to help users make informed investment decisions.</p>
                <Button text="Login" class="btn btn-outline-info" />
            </div>
        </div>
      
    </>
  )
}

export default Main