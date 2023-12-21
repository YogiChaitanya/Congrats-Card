const element = (
  // Write your code here.
  <div className='bg-container'>
    <h1 className='main-heading'>Congratulations</h1>
    <div className='card-container'>
      <img
        src='https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png'
        className='photo'
      />
      <h1 className='heading2'>Kiran V</h1>
      <p>Vishnu Institute of Computer Education and Technology, Bhimavaram</p>
      <img
        src='https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png'
        className='gift'
      />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
