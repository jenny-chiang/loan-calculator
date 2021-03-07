import React from 'react'
import News from '../component/news'
import '../style/allStyle.css'

const RatePage = () => {
    return (
        <div className="center">
            <h3 className="mr-20">學貸利率相關資訊</h3>
            <div className="mr-20" style={{alignItems: 'center'}}>
                <News
                    title="因應新冠肺炎疫情影響，學貸利率降為 0.9%（原 1.15% ）"
                    link="https://www.unews.com.tw/News/Info/3515"
                />
                <News
                    title="2020年 1 月之後，每月收入未達到 35,000 元，可向承貸銀行申請緩繳本金"
                    subtitle="* 1 次可以延後 1 年，最多可以申請 3 次"
                    link="https://udn.com/news/story/6885/4600764"
                />
            </div>
        </div>
    )
}

export default RatePage