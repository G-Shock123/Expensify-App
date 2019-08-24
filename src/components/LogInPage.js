import React from 'react'
import {connect} from 'react-redux'
import {startGoogleLogIn, startFacebookLogIn} from '../actions/auth'


export const LogInPage = ({startGoogleLogIn, startFacebookLogIn}) => (
    <div className ="box-layout"> 

      <div className="box-layout__box">
            <h1 className="box-layout__title">Expensify</h1>
            <p>Get expenses under control</p>
            <button className= "button" onClick={startGoogleLogIn}>Login with Google</button>
            <div className="box-layout__spacing"></div>
            <button className= "button" onClick={startFacebookLogIn}>Login with Facebook</button>
      </div>
        
    
    </div>
)

const mapDispatchToProps = (dispatch) =>({
    startGoogleLogIn: ()=>dispatch(startGoogleLogIn()),
    startFacebookLogIn:()=>dispatch(startFacebookLogIn())
})

export default connect(undefined,mapDispatchToProps)(LogInPage)