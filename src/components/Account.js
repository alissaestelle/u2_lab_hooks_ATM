import React, { useState } from 'react'
import '../styles/App.css'

const Account = (props) => {
  let [amount, setAmount] = useState(0)
  let [balance, setBalance] = useState(0)

  const addClick = (e) => {
    console.log(e)
    e.preventDefault()
    if (isNaN(amount) || amount < 0) {
      setBalance(balance)
    } else {
      setBalance(balance + Number(amount))
    }
    setAmount(0)
  }

  const minusClick = (e) => {
    console.log(e)
    e.preventDefault()
    if (isNaN(amount) || amount < 0) {
      setBalance(balance)
    } else if (balance < amount) {
      setBalance(balance)
    } else {
      setBalance(balance - Number(amount))
    }
    setAmount(0)
  }

  let balanceClass = 'balance'
  if (balance <= 0) {
    balanceClass += ' zero'
  }

  return (
    // <div>
    <div className="account">
      <h2>{props.name}</h2>
      <div className={balanceClass}>${balance}</div>
      <br />
      <div>
        <input
          className="input"
          type="text"
          placeholder="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <br />
        <br />
        <input
          className="btn"
          type="submit"
          value="Deposit"
          onClick={addClick}
        />
        <input
          className="btn"
          type="submit"
          value="Withdrawal"
          onClick={minusClick}
        />
      </div>
    </div>
  )
}

export default Account
