import React from 'react';
import Layout from '../components/layout';
import Link from 'next/link';
import * as quotes from '../quotes.json'
import  Router  from 'next/router';

class Home extends React.Component {


  componentDidMount(){
    var logStatus = localStorage.getItem('login') === 'true'
    console.log(localStorage.getItem('login') === 'true')
    if(!logStatus){
      Router.push('/')
    }
    localStorage.setItem('quotes',JSON.stringify(quotes.default))
  }


  render(){

    if(quotes.default.length == 0){
      return
    }else{
   var quotesData =  quotes.default.map(q => {
      return(
        <Link href={`quote?id=${q.id}`} key={q.id}>
        <div className="column"  style={{display:'flex',cursor:'pointer'}}>
        <div className="card">
              <div className="card-content">
                <p className="title">
                  {q.quote}
                </p>
                <p className="subtitle">
                  {q.author}
                </p>
            </div>
        </div>
        </div>
      </Link>
      )
    })
    }
return(
  <div>
    <Layout>
      <div className="header">
          <h3 className="is-size-3 home has-text-centered">Home</h3>
      </div>
      <div className="columns">
        <div className="column is-12">
            <figure className="image ">
                <img src="https://www.arohatours.co.nz/media/1645/banner_queenstown-g.jpg?mode=crop&height=700&width=1920&quality=80"/>
            </figure>
        </div>    
      </div>
       <div className="container">
              <div className="columns ">
                {quotesData}
              </div>
            </div>
    </Layout>
    <style jsx>{`
      .home{
        padding:0 50px;
      }
    `}</style>
  </div>
  )
 }
}
export default Home
