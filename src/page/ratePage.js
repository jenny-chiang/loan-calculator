import React from 'react'
import News from '../component/news'
import Bank from '../component/bank'
import dcardLogo from '../images/Dcard_Favicon_x520.png'
import taiwanBank from '../images/bankOfTaiwanLogo.jpg'
import taipeiFubon from '../images/fubonBankLogo.png'
import KaohsiungBank from '../images/bankOfKaohsiungLogo.jpg'

import '../style/allStyle.css'

const news = [
    {
        title: '因應新冠肺炎疫情影響，學貸利率降為 0.9%（原 1.15% ）',
        link: 'https://www.unews.com.tw/News/Info/3515',
    },
    {
        title: '2020年 1 月之後，每月收入未達到 35,000 元，可申請緩繳本金',
        subtitle: '* 1 次可以延後 1 年，最多可以申請 3 次',
        link: 'https://udn.com/news/story/6885/4600764',
    },
    {
        title: 'Dcard 就學貸款資訊彙整',
        img: dcardLogo,
        imgAlt: 'Dcard',
        link: 'https://www.facebook.com/dcard.tw/posts/1138109576277311/',
    },
]

const bank = [
    {
        bankLogo: taiwanBank,
        bankName: '臺灣銀行',
        bankLink: 'https://sloan.bot.com.tw/newsloan/login/SLoanLogin.action'
    },
    {
        bankLogo: taipeiFubon,
        bankName: '台北富邦銀行',
        bankLink: 'https://school.taipeifubon.com.tw/student/common/Index.faces'
    },
    {
        bankLogo: KaohsiungBank,
        bankName: '高雄銀行',
        bankLink: 'https://ssl.bok.com.tw/member/'
    },
]

const RatePage = () => {
    return (
        <div className="center">
            <h3 className="mr-20">學貸利率相關資訊</h3>
            <div className="mr-20" style={{alignItems: 'center'}}>
                {news.map((n, index) => {
                    return (
                        <News
                            key={index}
                            title={n.title}
                            subtitle={n?.subtitle}
                            img={n?.img}
                            imgAlt={n?.imgAlt}
                            link={n?.link}
                        />
                    )
                })}
            </div>
            <h3 className="mr-20">學貸入口</h3>
            <div className="mr-20" style={{alignItems: 'center'}}>
                {bank.map((b, index) => {
                    return (
                        <Bank
                            key={index}
                            bankLogo={b.bankLogo}
                            bankName={b.bankName}
                            bankLink={b.bankLink}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default RatePage
