import Layout from '../components/layout';
import Router from 'next/router'
import { Component } from 'react';

class About extends Component {

componentDidMount(){
    var logStatus = localStorage.getItem('login') === 'true'
    console.log(localStorage.getItem('login') === 'true')
    if(!logStatus){
      Router.push('/')
    }
  }

render(){
return(
    <div>
        <div>
            <Layout>
            <h1 className="is-size-2">About</h1>
            <section className="hero is-warning">
                <div className="hero-body">
                    <div className="container">
                    <h1 className="title">
                        GIVE THE BEST
                    </h1>
                    <h2 className="subtitle">
                        "Akash Verma"
                    </h2>
                    </div>
                </div>
            </section>
            </Layout>
        </div>
    </div>
    )
}
}
export default About