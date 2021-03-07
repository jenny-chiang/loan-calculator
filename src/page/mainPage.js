import React from 'react'
import LoanCalculator from "../component/LoanCalculator"
import '../style/allStyle.css'

const MainPage = () => {
    return (
        <div className="center">
            <h3 className="mr-20">學貸計算機</h3>
            <LoanCalculator/>
            <div className="mr-20">
                <p> 一學期的貸款金額有一年的還款期 <br/> * 假設大學四年每學期皆有貸款，還款期限則為 8 年 （1 學年 2 學期）* </p>
            </div>
        </div>
    )
}

export default MainPage