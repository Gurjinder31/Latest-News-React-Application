import React from 'react';
import axios from 'axios';

class App extends React.Component {
    
        constructor(props){
               super(props);
               this.state = {
                   data: {},
                   isLoaded: false,
               };
        }

    async componentDidMount(){
        const url = 'https://newsapi.org/v2/top-headlines?apikey=7331b79451f449c2bbb4d7da47c82f0b&country=ca';     
      
          const response = await axios.get(url);
           console.log(response);
           
           this.setState({data: response.data.articles, isLoaded: true})
   
    //         .then(response =>{
    //             console.log(response)
    //             this.setState({data: response.data.articles})
    //         })
    //         .catch((err)=>{
    //             console.log("it's not loading");
                                        
    //         })
    //   }
    }

            
             render() {
                // return (<div>
                //      {this.state.data.map(list=>
                //     <div > {list.data.articles[1].description}</div>
                //     )}

                // </div>)
            
    // var { data} = this.state;
          console.log(this.state.data)
            if(!this.state.isLoaded){
                return <div>its loading</div>;
            } else {
           
            return (
                
              <div> 
             {this.state.data.map((list, index,) =>
                <div key={index}>  {list.articles} </div>)}
             </div>
             )
            }
    }
}
export default App;