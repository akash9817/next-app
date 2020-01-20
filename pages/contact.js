import Layout from '../components/layout'
import  Router  from 'next/router'
import { Component } from 'react'


class Contact extends Component {

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
      <Layout>
      <h1 className="is-size-2">Contact</h1>
      <section className="hero is-danger">
            <div className="hero-body">
                <div className="container">
                <h1 className="title">
                   SOMETIMES THE RIGHT PATH IS NOT THE EASIEST ONE
                </h1>
                <h2 className="subtitle">
                    "Akash Verma"
                </h2>
                </div>
            </div>
        </section>
    </Layout>
    </div>
    )
}
}
export default Contact