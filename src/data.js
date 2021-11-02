import dcardLogo from './images/Dcard_Favicon_x520.png'
import taiwanBank from './images/bankOfTaiwanLogo.jpg'
import taipeiFubonBank from './images/fubonBankLogo.png'
import KaohsiungBank from './images/bankOfKaohsiungLogo.jpg'

export const bank = [
  {
    bankLogo: taiwanBank,
    bankName: '臺灣銀行',
    bankLink: 'https://sloan.bot.com.tw/newsloan/login/SLoanLogin.action',
  },
  {
    bankLogo: taipeiFubonBank,
    bankName: '台北富邦銀行',
    bankLink: 'https://school.taipeifubon.com.tw/student/common/Index.faces',
  },
  {
    bankLogo: KaohsiungBank,
    bankName: '高雄銀行',
    bankLink: 'https://ssl.bok.com.tw/member/',
  },
]

export const news = [
  {
    title: '學貸 Q&A',
    subtitle: '是否影響信用紀錄、申請信用卡',
    link: 'https://www.money101.com.tw/blog/%E5%AD%B8%E8%B2%B8-%E7%B7%A9%E7%B9%B3-%E4%BF%A1%E8%B2%B8-%E8%B2%B8%E6%AC%BE-%E4%BF%A1%E7%94%A8%E5%8D%A1',
  },
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
