import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return (
    <>
      <div id='flex-container'>
        <FormComponent />
        <BannerComponent />
      </div>
    </>
  )
}

function FormComponent() {
  const [mortgageAmount, setMortgageAmount] = useState(0);
  const [mortgageTerm, setMortgageTerm] = useState(0);
  const [interestRate, setInterestRate] = useState(0.0);
  const [mortgageType, setMortgageType] = useState('repayment');
  const [result, setResult] = useState(100);

  function calculateMortgage(event) {
    event.preventDefault();

    const result = (mortgageAmount / mortgageAmount) * interestRate;
    setResult(result);
  }

  return (
    <div className='formComponent'>
      <header className='form-header'>
        <h1>Mortgage calculator</h1>
        <p>Clear All</p>
      </header>

      <form className='form' onSubmit={calculateMortgage}>
        <fieldset>
          <label htmlFor='mortgageamount'>Mortgage Amount</label>
          <input type='number' id='mortgageamount' value={mortgageAmount} onChange={(event) => setMortgageAmount(event.target.value)}/>
        </fieldset>

        <fieldset className='inline-fieldset'>
          <fieldset>
            <label htmlFor='mortgageterm'>Mortgage Term</label>
            <input type='number' id='mortgageterm' value={mortgageTerm} onChange={(event) => setMortgageTerm(event.target.value)}/>
          </fieldset>

          <fieldset>
            <label htmlFor='interestrate'>Interest rate</label>
            <input type='number' id='interestrate' value={interestRate} onChange={(event) => setInterestRate(event.target.value)}/>
          </fieldset>

          <fieldset>
            <h3>Mortgage Type</h3>

          <fieldset className='block-fieldset'>
            <fieldset className='bordered'>
            <input type='radio' name='type' id='repayment' checked={mortgageType === 'repayment' ? true : false} value={mortgageType} onChange={() => setMortgageType('repayment')}/>
            <label htmlFor='repayment'>Repayment</label>
            </fieldset>
          </fieldset>
            
            <fieldset className='bordered'>
              <input type='radio' name='type' id='interestonly' checked={mortgageType === 'interestonly' ? true : false} value={mortgageType} onChange={() => setMortgageType('interestonly')}/>
              <label htmlFor='interestonly'>Interest Only</label>
            </fieldset>
          
          </fieldset>
          </fieldset>

        <fieldset className='submitbtn'>
          <input type="submit" value="calculate Mortgage" onClick={calculateMortgage} />
        </fieldset>
        
      </form>

      <Result repaymentValue={result} />
    </div>
    
  )
}

function BannerComponent() {
  return (
    <div className='banner'>
      <h1>Result shown here</h1>
      <p>Complete the form and click complete payment to see your mortgage repayment</p>
    </div>
    
  )
}

// props in React
  //parameters vs Argument

function Result(props) {
  const { repaymentValue } = props;
 
  return (
    <p>Your mortgage repayment is: 100</p>
  )
}


export default App
