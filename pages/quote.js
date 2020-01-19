import {withRouter} from 'next/router'
import Layout from '../components/layout'
import { Component } from 'react'


class Quote extends Component {

    state={
        quote:{}
    }

    componentDidMount(){
       var q = JSON.parse(localStorage.getItem('quotes'))
       this.setState({quote:q[this.props.router.query.id - 1]})      
    }

    render(){
    return(
        <Layout>
        <div>
    
        <div className="container">
            <section className="hero is-primary">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">
                            {this.state.quote.quote}
                        </h1>
                        <h2 className="sub-title">
                            {this.state.quote.author}
                        </h2>
                    </div>
                </div>
            </section>
            </div> 
        </div>
        </Layout>
    )
}

}

// Quote.getInitialProps = async (props) => {
//     const {query} = props
//     var quote;
//     // if(localStorage){
//     //   //quote = JSON.parse(localStorage.getItem('quotes'))
//     // }
//     if(typeof(Storage) !== "undefined"){
//         //use the local storage
//          quote = JSON.parse(localStorage.getItem('quotes'))
//          //console.log(quote[query.id])
//      }
//      console.log(query.id)
//     return{quote : quote[query.id]}
// }

export default withRouter(Quote)