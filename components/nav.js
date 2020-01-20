import React,{Component} from 'react';
import Link from 'next/link';
import  Router  from 'next/router';


class Nav extends Component {

  state={
    login:false,
    name:''
  }


  componentDidMount(){
    var login = localStorage.getItem('login') === 'true'
    if(login){
      this.setState({login})
      var data = JSON.parse(localStorage.getItem('data'))
      var pos = localStorage.getItem('pos')
      this.setState({name:data[pos].name})
    }
    
  }

  signout = () => {
    localStorage.setItem('login', false)
    this.setState({login:false}) 
    alert('successfully logout')
    Router.push('/')
  }

  render(){
return(
 <div> 
   <nav className="navbar is-primary mynav">
   <div className="navbar-brand">
     <a className="navbar-item">
      App
    </a>
  </div>
  <div className="navbar-start">
          <Link href="/home" >
            <a className="navbar-item" >Home</a>
          </Link>
          <Link href="/about">
              <a className="navbar-item">About</a>
          </Link>
          <Link href="/contact">
              <a className="navbar-item">Contact</a>
          </Link>
    </div>
    {
       this.state.login 
       
       ?   
      <div className="navbar-end" style={{marginRight:'35px'}}>
       <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link">
          {this.state.name}
        </a>

        <div className="navbar-dropdown">
          <Link href="/account">
              <a className="navbar-item">
                Account
              </a>
          </Link>
          <Link href="/analysis">
              <a className="navbar-item">
                Analysis
              </a>
          </Link>
          <Link href="/test">
              <a className="navbar-item">
                Test
              </a>
          </Link>
          <div onClick={this.signout}>
            <a className="navbar-item">
              Logout
            </a>
          </div>
        </div>
      </div>
     </div>

        : 


      <div className="navbar-end">
        <div className="navbar-item">
        <div className="buttons">  
         <Link href="/"> 
          <a className="button is-primary is-inverted is-outlined">
            <strong>Login</strong>
          </a>
        </Link>
        <Link href="/signup"> 
          <a className="button is-primary is-inverted is-outlined">
            <strong>Sign up</strong>
          </a>
        </Link>
 
        </div>
      </div>
    </div>
  } 
  </nav>

   <style jsx>{`
     .mynav{
       font-size:120%;
     }
     .navbar-brand{
       font-size:30px;
       font-weight:bolder;
       margin-right:40px;
     }
      `}
   </style>
</div>
)
}
}

export default Nav