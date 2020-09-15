import React from 'react'

export default function nav() {
         
  return (
          <>
            <nav style={{position:'fixed', top:0, backgroundColor:'#333'}}> 
              <div className="nav-wrapper">
                <a href="#!" className="brand-logo"><i className="material-icons">movie</i>TheMovieDB</a>
                  <ul className="right hide-on-med-and-down">
                   <li><a href="/"><i className="material-icons">search</i></a></li>
                   <li><a href="/"><i className="material-icons">refresh</i></a></li>
                   <li><a href="/"><i className="material-icons">more_vert</i></a></li>
                  </ul>
                </div>
            </nav>  
          </>
        )
    }


