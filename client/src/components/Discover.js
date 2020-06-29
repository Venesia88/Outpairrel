import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import '../assets/main.css'
import ImageCard from './ImageCard.js'
import ImageSearch from './ImageSearch';
import { useSelector } from 'react-redux';
import { listPosts } from '../api/posts';

// function Discover() {
//     // const [images, setImages] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);
//     const [term, setTerm] = useState('');
//     const [posts, updatePosts] = useState([]);
//     useEffect(() => {
//         listPosts().then(posts => {
//             updatePosts(posts);
//         })
//     });
//     // useEffect(function () {
//     //     getProduct().then(products => {
//     //         updateProducts(products);
//     //         setIsLoading(false);
//     //         console.log(products);
//     //     })
//     // }, []);

//     let filters = [term];
//     let post = posts
//     console.log(term)
//     if (posts.length > 0 && term) {
//         post = posts.filter(p => {
//             return p.tags[0][0].tags.includes(term)
//         });
//     }
//     //console.log(term);
//     return (
//         <div className="container mx-auto">
//             <ImageSearch searchText={(text) => setTerm(text)} />

//             {/* {!isLoading && images.length === 0 && <h1 className="text-5xl text-center mx-auto mt-32">No Images Found</h1> } */}

//             {/* {isLoading ? <h1 className="text-6xl text-center mx-auto mt-32"> Loading ... </h1> : } */}
//             <div className="grid grid-cols-3 gap-4">
//                 {post.map(post => (
//                     <ImageCard id={post.id} photo={post.photo} like={post.like} /> //id={post.id} photo={post.photo} like={post.like}
//                 ))}
//             </div>

//             <h1 className="font-serif text-lg text-gray-800 text-center mx-auto mt-10 mb-10"> Outpairrel 2020 </h1>
//         </div>

//     )
// }

// export default Discover;

export default class Discover extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            posts: []
        }
    }

    componentDidMount() {
        listPosts().then(posts => {
            this.setState({
                posts: posts
            })
        })
    }

    render() {
        // let filters = [this.state.term];
        let post = this.state.posts;
        console.log(this.state.term)
        if (this.state.posts.length > 0 && this.state.term) {
            post = this.state.posts.filter(p => {
                return p.tags[0].tags.includes(this.state.term)
            });
        }
        return (
            <div className="container mx-auto">
                <ImageSearch searchText={(text) => this.setState({term: text})} />

                {/* {!isLoading && images.length === 0 && <h1 className="text-5xl text-center mx-auto mt-32">No Images Found</h1> } */}

                {/* {isLoading ? <h1 className="text-6xl text-center mx-auto mt-32"> Loading ... </h1> : } */}
                <div className="grid grid-cols-3 gap-4">
                    {post.map(post => (
                        <ImageCard id={post.id} photo={post.photo} like={post.likes} /> //id={post.id} photo={post.photo} like={post.like}
                    ))}
                </div>

                <h1 className="font-serif text-lg text-gray-800 text-center mx-auto mt-10 mb-10"> Outpairrel 2020 </h1>
            </div>
        )
    }
}







// export default class Discover extends Component {



//     render() {
//         // const [images, setImages] = useState([]);
//         // const [isLoading, setIsLoading] = useState(true);
//         // const [term, setTerm] = useState('');


//     }

// }