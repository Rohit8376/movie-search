import React,{Component} from 'react';
import axios from  'axios'
import './App.css';

export default class App extends Component {

  constructor(props){
      super(props)
       this.state = {  movieRows:[] , searchval:"" }
  }

     async componentDidMount(movie){
       
      if(!movie)
           var url  = 'https://api.themoviedb.org/3/search/movie?query=jurassic &api_key=c0c2ae7e590555383579f5f3e43e1f76'
        else
          var url = 'https://api.themoviedb.org/3/search/movie?query='+movie+'&api_key=c0c2ae7e590555383579f5f3e43e1f76'

          await axios.get(url).then(res=>{
          this.setState({movieRows:res.data.results})
        })
     }
 

  render() {

    return (
  <>
     <div className='container' style={{marginTop:'100px'}}>


        <div className="input-field" style={{marginBottom:'50px'}}>
        <i className="material-icons prefix">search</i>
            <input id="icon_prefix" type="text" className="validate"   onChange={e=>{this.componentDidMount(e.target.value)}}/>
            <label htmlFor="icon_prefix">Search movie by name</label>
        </div>
     
          {this.state.movieRows.map(mv=>(
                <div className="row cardview" >
                <div className="col s8 m2 l2 offset-s3">
                <img alt = "poster" src={'https://image.tmdb.org/t/p/w500/'+mv.poster_path}  style={{borderRadius:'10px'}}/>
                </div>
                <div className=" col s10 m10 l10 offset-s2"   style={{paddingLeft:'30px', paddingRight:'20px', height:'100%'}}>
                <h3>{mv.title}</h3>
                <p>RELEASE DATE {mv.release_date} </p>
                <p>RATING: {mv.popularity}</p>
                <p>{mv.overview}</p>  
                </div>
                </div>
          ))}
       </div>
      </>
    );
 
  }
}





 