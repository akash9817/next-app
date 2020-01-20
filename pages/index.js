
import Layout from '../components/layout';
import Router from 'next/router'
import {Component} from 'react'

class Login extends Component {

    state = {
        mob:'',
        showError:false,
    }

    handleChange = (e) => {
        this.setState({mob:e.target.value})
    }

    validateform = (e) => {
        e.preventDefault()
        var mob = this.state.mob
        if(/^[5-9+]\d{9}$/.test(mob)){
            console.log("mob")
            this.setState({showError:false},() => {Router.push('/')}) 
        }else{
            this.setState({showError:true})
        }
    }
    
    signin = (e) => {
        
        e.preventDefault()
        var flag = false
        var pos = null
        var userInfo = e.target
        var data = JSON.parse(localStorage.getItem('data'))
        for(var i = 0; i < data.length; i++){
            if(data[i].mob === userInfo.mob.value && data[i].password === userInfo.password.value){
                flag = true
                pos = i
                break;
            }
        }

        if(flag === true) {
            localStorage.setItem('pos',pos)
            localStorage.setItem('login',true)
            Router.push('/home')
        }
        else{
                this.setState({showError:true})
        }
    }

    render(){
       
        return(
     <div>
        <Layout>
            <div className="form-container">
               <h1 className="is-size-2">Login to your account</h1> 
               <div className="form-box"> 
               <form className="box" onSubmit={this.signin}> 
               {this.state.showError ? 
                    <div className="has-background-danger error">
                        <p className="is-size-4">Unable to Login check your mobile number and password</p>
                    </div>
                    :
                    null}
                <div className="field">
                        <label className="label">Mobile number</label>
                    <div className="control">
                        <input className="input"
                        name="mob"
                         type="tel" 
                         onChange={(e) => this.handleChange(e)} 
                         value={this.state.mob}
                         placeholder="Mobile Number"
                         required/>
                    </div> 
                </div>
                <div className="field">
                        <label className="label">Password</label>
                    <div className="control">
                        <input
                          name="password"
                          className="input" 
                          type="password" 
                          placeholder="Password" 
                          required/>
                    </div>
                </div>
                <div className="field">
                    <button className="button is-success" type="submit" >
                        Login
                    </button>
                </div>
                </form> 
                </div>
            </div>
        </Layout>
        <style jsx>{`
     .form-container{
       width:60%;
       margin-left:auto;
       margin-right:auto;
     }
     .label{
         text-align:left;
     }
     .error{
         color:white;
         margin-top:6px;
         border-radius:5px;
         padding: 15px 0 15px 10px;
     }
      `}
   </style>
    </div>
        )
    }
}

export default Login

