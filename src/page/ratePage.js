import React, { useState } from 'react'
import News from '../component/news'
import Bank from '../component/bank'
import dcardLogo from '../images/Dcard_Favicon_x520.png'
import taiwanBank from '../images/bankOfTaiwanLogo.jpg'
import taipeiFubon from '../images/fubonBankLogo.png'
import KaohsiungBank from '../images/bankOfKaohsiungLogo.jpg'

import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
import SearchIcon from '@material-ui/icons/Search'
import { makeStyles } from '@material-ui/core'

const useStyle = makeStyles({
  center: {
    textAlign: 'center',
  },
  margin: {
    margin: 20,
  },
  row: {
    flexDirection: 'row',
  },
  card: {
    margin: 20,
    alignItems: 'center',
  },
  searchBar: {
    width: 200,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
})

const news = [
  {
    title: '學貸 Q&A',
    subtitle: '是否信用紀錄、申請信用卡',
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

const bank = [
  {
    bankLogo: taiwanBank,
    bankName: '臺灣銀行',
    bankLink: 'https://sloan.bot.com.tw/newsloan/login/SLoanLogin.action',
  },
  {
    bankLogo: taipeiFubon,
    bankName: '台北富邦銀行',
    bankLink: 'https://school.taipeifubon.com.tw/student/common/Index.faces',
  },
  {
    bankLogo: KaohsiungBank,
    bankName: '高雄銀行',
    bankLink: 'https://ssl.bok.com.tw/member/',
  },
]

const RatePage = () => {
  const classes = useStyle()
  const [filter, setFilter] = useState('')
  return (
    <div className={classes.center}>
      <div className={classes.row}>
        <h3 className={classes.margin}>學貸利率相關資訊</h3>
        <div className={classes.searchBar}>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <SearchIcon />
            <TextField
              value={filter}
              onChange={(event) => setFilter(event.target.value)}
              label="篩選新聞"
            />
          </Box>
        </div>
      </div>
      <div className={classes.card}>
        {news
          .filter(
            (news) =>
              news.title.toLowerCase().includes(filter.toLowerCase()) ||
              news.subtitle?.toLowerCase()?.includes(filter)
          )
          .map((n, index) => {
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
      <h3 className={classes.margin}>學貸入口</h3>
      <div className={classes.card}>
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
