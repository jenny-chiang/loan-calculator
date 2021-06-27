import React from 'react'
import News from '../component/news'
import Bank from '../component/bank'
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
                    title="2020年 1 月之後，每月收入未達到 35,000 元，可申請緩繳本金"
                    subtitle="* 1 次可以延後 1 年，最多可以申請 3 次"
                    link="https://udn.com/news/story/6885/4600764"
                />
                <News
                    title="Dcard 就學貸款資訊彙整"
                    img={require("../images/Dcard_Favicon_x520.png")}
                    imgAlt={'Dcard'}
                    link="https://www.facebook.com/dcard.tw/posts/1138109576277311/"
                />
            </div>
            <h3 className="mr-20">學貸入口</h3>
            <div className="mr-20" style={{alignItems: 'center'}}>
                <Bank
                    bankLogo={require("../images/bankOfTaiwanLogo.jpg")}
                    bankName="台灣銀行"
                    bankLink="https://sloan.bot.com.tw/newsloan/login/SLoanLogin.action"
                />
                <Bank
                    bankLogo={require("../images/fubonBankLogo.png")}
                    bankName="台北富邦銀行"
                    bankLink="https://school.taipeifubon.com.tw/student/common/Index.faces"
                />
                <Bank
                    bankLogo={require("../images/bankOfKaohsiungLogo.jpg")}
                    bankName="高雄銀行"
                    bankLink="https://ssl.bok.com.tw/member/"
                />
            </div>
        </div>
    )
}

export default RatePage
