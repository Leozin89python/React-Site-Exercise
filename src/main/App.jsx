import React ,{Component}from 'react'
import './App.css'

import  console from '../Assets/console.png'
import arrow from '../Assets/arrow.png'
import logotype from '../Assets/logo.png'
import code from '../Assets/vscode.png'
import node from '../Assets/node.png'

export default class App extends Component {
  
    render(){

        return(
            <div className="App">
             
             
                <div className="head">
                    <header>
                        <h1>
                        Program<b>&copy;</b>
                        </h1>
                    </header>
                    </div>
            
                    <div className="center">
                        <div className="area1">
                            <h2 className="top">
                            content<b>&copy;</b>
                            </h2>
                                
                                <h2 className="con">Play station - Sony&copy; department Usa </h2>
                                <h2 className="con">Play station - Sony&copy; department JPN</h2>
                                <h2 className="con">Nintendo DS- Nintendo&copy; department Usa</h2>
                                <h2 className="con">Xbox - Microsoft&copy; department Usa</h2>
                                <h2 className="con">Mega drive III - Sega&copy; department Fr</h2>
                                <h2 className="con">Nintendo 64 - Nintendo&copy; department Din</h2>
                                <h2 className="con">Mac book- Apple&copy; department Usa</h2>
                                <h2 className="con">Xbox 360 - Microsoft&copy; department Br</h2>
                           
                        </div>



                        <div className="area2">
                             <img className="image1" src={arrow}/>
                             <img className="image2" src={arrow}/>
                             <img className="image3" src={arrow}/>
                             <img className="image4" src={arrow}/>
                             <img className="image5" src={arrow}/>
                             <img className="image6" src={arrow}/>
                             <img className="image7" src={arrow}/>
                             <img className="image8" src={arrow}/>
                        </div>

                        <div className="area3" >
                            <img className="image" src={console} />
                        </div>
                    
                </div>
            <footer>
                <h3 className="me">Leonardo sousa<b>&copy;</b></h3>
               <h4 className="fot"> this web site is produced by </h4>
            <img className="logo1" src={logotype} />
            <img className="logo2" src={code} />
            <img className="logo3" src={node} />
           {/** <img className="logo2" src={combo} /> */} 
           {/**<img className="logo3" src={node} /> */} 
            </footer>
        </div>
        )
    }
}
