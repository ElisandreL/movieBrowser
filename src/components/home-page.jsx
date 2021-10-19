import React, {useEffect, useState} from "react";
import axios from "axios";
import { render } from "@testing-library/react";
import { Component } from "react";


// export default function Home() {
//     const [movie, setMovie] = useState([]);

//     useEffect(() => {
//         axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=6af4c8b3996dc77c45a6ed3f072e87c5')
//             .then((res) => {
//                 setMovie(res.data.results);
//                 console.log(movie)
//             });
//     }, []);

//     //if (!movie) return null;

//     return (
//         movie.map (movie => {
//             return (
//                 <li>
//                     {movie.title}
//                 </li>
//             )
//         })
//     );
// }


export default class Home extends React.Component {
    state = {
        movies: []
    }

    componentDidMount() {
        axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=6af4c8b3996dc77c45a6ed3f072e87c5')
            .then(res => {
                console.log(res)
                this.setState({ movies: res.data.results })
            })
    }

    render() {
        return (
            <ul>
                {this.state.movies.map(movie => <li key={movie.id}> {movie.title} </li>)}
            </ul>
            
        )
    }
}

// function Home() {
//     return (
//         <div className='hp'>
//         <h1>Stream Everywhere</h1>
//             <div className='spotlight'>
//                 {/* <img src=/*fetch{logo} className="visual" alt="visual" /> */}
//                 <movieList />          
//             </div>
//             <h2>Trending</h2>
//             <div className='trends'>
//                 {/* <img src=/*fetch className='visualTrend' alt='trend visuals' /> */}
//                 <div className='rate'>
//                     <p>IMDb</p>
//                     <p>**insert icon**</p>
//                     <p>**Insert rate fetch data**</p>
//                 </div>
//                 {/* <Title /> */}
//             </div>
//         </div>
//     )
// }
// export default Home;