import Layout from '../components/layout';
import Router from 'next/router'
import {Component} from 'react'
var data = []
class Signup extends Component {

    state = {
        mob:'',
        showError:false,
        data:[]
    }

    componentDidMount(){
        if(localStorage.getItem('data')){
            this.setState({data:JSON.parse(localStorage.getItem('data'))})
        }
    }

    handleChange = (e) => {
        this.setState({mob:e.target.value},() => {
            console.log(this.state.mob)
        })

    }

    validateform = (e) => {
        e.preventDefault()
        var mob = this.state.mob
        console.log(mob)
        if(/^[5-9+]\d{9}$/.test(mob)){
            console.log("mob")
            this.setState({showError:false})
            Router.push('/')
        }else{
            this.setState({showError:true})
        }

    }

    signup = (e) => {
        e.preventDefault()
        var data = this.state.data
        var userInfo = e.target
        var userData = {
            name:userInfo.name.value,
            email:userInfo.email.value,
            mob:userInfo.mob.value,
            password:userInfo.password.value
        }
        data.push(userData)
        localStorage.setItem('data',JSON.stringify(data))
        this.setState({data})
        userInfo.reset()
        alert('successfully signup')
    }

    render(){
        return(
    <div>
        <Layout>
            <div className="form-container">
                <h1 className="is-size-2">Sign up</h1>
               <div className="form-box"> 
               <form className="box" onSubmit={this.signup}> 
               <div className="field">
                        <label className="label">Name</label>
                    <div className="control">
                        <input 
                            name="name"
                            className="input" 
                            type="text" 
                            placeholder="Enter your name" 
                            required/>
                    </div>
                </div>
                <div className="field">
                        <label className="label">Email</label>
                    <div className="control">
                        <input 
                          name="email" 
                          className="input" 
                          type="email" 
                          placeholder="Enter your email"
                           required/>
                    </div>
                </div>
                <div className="field">
                        <label className="label">Mobile Number</label>
                    <div className="control">
                        <input  
                            name="mob"
                            className="input" 
                            type="text"
                            pattern="[6789][0-9]{9}" 
                            placeholder="Enter your mobile number" 
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
                            pattern="^.{6,}$"
                            title="minimum 6 character"
                            required/>
                    </div>
                </div>
                <div className="field">
                    <button className="button is-success" type="submit">
                        Signup
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
     }
      `}
   </style>
    </div>
        )
    }
}

export default Signup
