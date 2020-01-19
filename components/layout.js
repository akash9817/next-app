import Nav from './nav'
import Footer from './footer'
import Head from 'next/head'


function Layout(props){
        return(         
            <div style={{display:'flex',flexDirection:'column',height:'100vh'}}> 
                <Head>
                    <title>Home</title>
                    <link rel="icon" href="/favicon.ico" />
                    <meta charSet="utf-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <title>Hello Bulma!</title>
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css"/>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
                    <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
                </Head>
                <Nav/>
                    <div className="" style={{flexGrow:1,margin:'30px 0'}} >
                        <div className="container is-fullhd">
                            {props.children}
                        </div>
                    </div>
                <Footer/>
            </div>
        )
}
export default Layout