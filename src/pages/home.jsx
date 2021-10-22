import React, {useEffect, useState} from "react";
import axios from "axios";


// Not bad but not the best :
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


// export default class Home extends React.Component {
//     state = {
//         movies: []
//     }

//     componentDidMount() {
//         axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=6af4c8b3996dc77c45a6ed3f072e87c5')
//             .then(res => {
//                 console.log(res)
//                 this.setState({ movies: res.data.results })
//             })
//     }

//     render() {
//         return (
//             <ul>
//                 {this.state.movies.map(movie => <li key={movie.id}> {movie.title} </li>)}
//             </ul>
            
//         )
//     }
// }

function Home() {
    const [movie, setMovie] = useState([]);

    async function fetch() {
        await axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=6af4c8b3996dc77c45a6ed3f072e87c5')
        .then(res => {
            setMovie(res.data.results);
        })

    }

    useEffect(() => {
        fetch()
    }, []);

    console.log(movie)

    if(movie.length !== 0) {
        return (
            <div>
                <Title />
                <Images />
                <Rating />
            </div>
        );
    } else {
        return (
            <div>Loading...</div>
        );
    }
    function Title() {
        return (
            <div>
            {
                movie.map((movie) => (
                        <div key={movie.id}>
                        <p> {movie.title} </p>
                        </div>
                    ))
            }
            </div>
        )
    }

    function Images() {
        return (
            <div>
                 {
                    movie.map((movie) => (
                        <img
                        key={movie.id}
                        src={movie.poster_path} 
                        alt='poster'
                        ></img>
                    ))
                }
            </div>
        )
    }
    function Rating() {
        return (
            <div>
                {
                    movie.map((movie) => (
                        <div key={movie.id}>
                        <p> {movie.vote_average} </p>
                        </div>
                    ))
                }
            </div>
        )
    }
    
}
    // function Home() {
    //     return (
    //         <div className='hp'>
    //         <h1>Stream Everywhere</h1>
    //             <div className='spotlight'>
    //                 {/* <img src=/*fetch{logo} className="visual" alt="visual" /> */}
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

 export default Home;



