import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../Loader.js';

export default class Feed extends Component {
  constructor() {
    super();
    this.state = {
      data: '',
      isLoading: true
    }
  }
  
  componentDidMount() {
    fetch("https://conduit.productionready.io/api/articles?limit=10&offset=0")
    .then(res => res.json())
    .then(data => this.setState({data, isLoading: false}))
  }

  render() {
    return (
          <>
          {this.state.data && this.state.data.articles.map((article, index) =>
            // {/* Article preview card container */}
            <div key={index} className="art-pre-card-cont">
              {/* First top container */}
              <div className="art-pre-card-info-cont">
                {/* Image and user info container */}
                <div className="art-pre-card-user-cont">
                  {/* User profile image container */}
                  <div className="user-pro-img-container">
                    <Link to='#' className="img-pre-link">
                      <img 
                        src={article.author.image ? 
                        article.author.image :
                        'https://static.productionready.io/images/smiley-cyrus.jpg'}
                        alt="profile"
                        className="img-pre"
                      />
                    </Link>
                  </div>
                  {/* Basic article and user info container */}
                  <div className="user-basic-info">
                    <Link className="art-pro-link" to={'userLink'}>{article.author.username}</Link>
                    <span className="date-text">{article.createdAt}</span>
                  </div>
                </div>
                {/* Like button */}
                <div className="like-art-pre-cont">
                  <span className={`like-art-icon-cont ${article.favorited ? 'true' : ''}`}>
                    <i className="icon fas fa-heart"></i>
                  </span>
                  <span className="like-art-count">{article.favoritesCount}</span>
                </div>
              {/*  */}
              </div>
              {/*Basic article and artic"le info container */}
              <div className="art-pre-art-basic-cont">
                  <div className="art-pre-cont">
                    <Link className="art-pre-link-cont" to="#">
                      <h1 className="art-pre-heading">{article.title}</h1>
                      <p className="art-pre-para">{article.description}</p>
                    </Link>
                  </div>
              </div>
              {/* Link and tag container */}
              <div className="art-pre-footer">
                <div className="art-pre-link-cont">
                  <Link to="#" className="art-pre-text-link">Read more</Link>
                </div>
                {/* Article preview tag container */}
                <div className="art-pre-tag-cont">
                  <ul className="art-pre-tags-list">
                    {/* Tag list */}
                    {article.tagList.map((tag, index) => 
                      <li key={index} className="art-pre-list-item">
                        <Link className="art-pre-list-item-link" to="#">
                          {tag}
                        </Link>
                      </li>
                      )
                    }
                  </ul>
                </div>
              </div>
            </div>
            // End of the card
          )}
          {this.state.isLoading && 
            <div className="feed-loader">
              <Loader />
            </div>
            }
          </>

    )
  }
}