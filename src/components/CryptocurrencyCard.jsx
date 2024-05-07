import {Card} from "antd"

function CryptocurrencyCard(props) {

    const {currency} = props
    const price = currency.quote.USD.price
    const price_change = currency.quote.USD.percent_change_7d
    const volume_change = currency.quote.USD.volume_change_24h


    return (
      <>
        <Card
      title={
        <div className="flex items-center gap-1">
            <img src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${currency.id}.png`}/>
            <span>{currency.name}</span>
        </div>
      }
      style={{
        width: 300,
      }}
    >
      <p>Текущая цена: {price}$</p>
      <p>Изменение цены за 7 дней: {price_change}%</p>
      <p>Изменение объема за 24 часа: {volume_change}</p>
    </Card>
      </>
    )
  }
  
  export default CryptocurrencyCard
  