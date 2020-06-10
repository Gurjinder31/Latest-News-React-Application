import React from 'react';
import axios from 'axios';

import style from './css/style.css';

class App extends React.Component {
    
        constructor(props){
               super(props);
               this.state = {
                   data: [],
                   isLoaded: false,
               };
        }

     async componentDidMount(){
        const url = 'https://newsapi.org/v2/top-headlines?apikey=7331b79451f449c2bbb4d7da47c82f0b&country=ca';     
      
          const response = await axios.get(url);
           console.log(response.data);
           
           this.setState({data: response.data.articles, isLoaded: true})
        }
   
        render() {
            var { data, isLoaded} = this.state;
         
            if(!isLoaded){
                return <div>its loading</div>;
            } else {
           
            return (
            

              <div>
                <nav class="navbar ">
                     <a class="navbar-brand navbar-brand-light" href="#">GS news</a>
                </nav>
           
              <div className="list-group"> 
                {data.map((list) =>
                
                <div className="container">
                <div className="row-4">
                <div class="card-group">
                <div class="card mb-3">
                 <img class="card-img" alt="headlines" src={list.urlToImage}></img>
                 <div class="card-body">
                <h5 class="card-title">{list.title}</h5>
                <a  class="card-text text-decoration-none text-white"  href={list.url} target="_blank">
                <i class="fas fa-mouse">  click me for more details</i>
                </a>
                </div>
                </div>
                </div>
                </div>
                </div> 
                
                )}                                                                                     
             </div>
             </div>  
            )
            }
        }            
}
export default App;