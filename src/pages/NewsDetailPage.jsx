import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

function NewsDetailPage() {


    const {id} = useParams();
    const [post, setPost] = useState({});

    useEffect(() => {
        async function fetchPosts() {
            try {
                const response = await axios.get(`https://c3610a79f938bf9a.mokky.dev/post/${id}`);
                setPost(response.data);
            } catch(e) {
                console.log(e);
            }
        }
        fetchPosts();
            
        
    },  [id]);
    
    
    
    return (
        <section className="mobile-block">
        <div className="container">
            <h1 className="title">{post.title}</h1>
            <h2 className="news-detail-date">{post.date}</h2>
            <img src={post.imageUrl} className="news-detail-img" alt="Name" />
            <p className="news-detail-description">
                {post.description}
            
            </p>
            <h4 className="news-card__category primary-inverse">{post.category}</h4>

            
         
        </div>
    </section>
    );
}

export default NewsDetailPage;