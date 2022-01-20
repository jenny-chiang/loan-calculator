import React, { useState } from 'react'
import News from '../component/news'
import Bank from '../component/bank'
import { bank, news } from '../data'

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
          .map((n) => {
            return (
              <News
                key={`${n.title}`}
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
        {bank.map((b) => {
          return (
            <Bank
              key={`${b.bankName}`}
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
