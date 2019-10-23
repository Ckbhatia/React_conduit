import React, { Component } from "react";
import "./../../App.scss";
import styled from "styled-components";
import Header from "../Header/Header";
import Feed from "../Feed";
import Tags from "../Tags";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      activeTab: "global-feed",
      currentPage: 0,
      isLoading: true
    };
  }

  // TODO: Fetch article based on request instead of default to global

  render() {
    // console.log(this.props, "MainPage props");
    return (
      <>
        {/* Header Component */}
        <main className="main-container">
          {/*  */}
          <section className="hero-section">
            {this.props.user ? (
              <div className="row">
                <Div className="user-article-btn-container col-10 col-sm-10 col-md-10">
                  <button
                    //TODO: Add method to handleTab
                    className={
                      this.state.activeTab === "your-feed"
                        ? "user-article-btn active"
                        : "user-article-btn"
                    }
                    data-value="your-feed"
                  >
                    Your Feed
                  </button>
                  <button
                    //TODO: Add method to handleTab
                    className={
                      this.state.activeTab === "global-feed"
                        ? "user-article-btn active"
                        : "user-article-btn"
                    }
                    data-value="global-feed"
                  >
                    Global Feed
                  </button>
                  {this.state.activeTab !== "your-feed" &&
                    this.state.activeTab !== "global-feed" && (
                      <button
                        //TODO: Add method to handleTab
                        className={
                          this.state.activeTab !== "your-feed" &&
                          this.state.activeTab !== "global-feed"
                            ? "user-article-btn active"
                            : "user-article-btn"
                        }
                        data-value={this.state.activeTab}
                      >
                        {`#${this.state.activeTab}`}
                      </button>
                    )}
                </Div>
              </div>
            ) : (
              <>
                <div className="hero-container">
                  <div className="hero-text-container center-child">
                    <h1 className="hero-header">Top blog</h1>
                    <p className="hero-para">
                      Best place to share your articles
                    </p>
                  </div>
                </div>
                <div className="row">
                  <Div className="user-article-btn-container col-10 col-sm-10 col-md-10">
                    <button
                      //TODO: Add method to handleTab
                      className={
                        this.state.activeTab === "global-feed"
                          ? "user-article-btn active"
                          : "user-article-btn"
                      }
                      data-value="global-feed"
                    >
                      Global Feed
                    </button>
                    {this.state.activeTab !== "your-feed" &&
                      this.state.activeTab !== "global-feed" && (
                        <button
                          //TODO: Add method to handleTab
                          className={
                            this.state.activeTab !== "your-feed" &&
                            this.state.activeTab !== "global-feed"
                              ? "user-article-btn active"
                              : "user-article-btn"
                          }
                          data-value={this.state.activeTab}
                        >
                          {`#${this.state.activeTab}`}
                        </button>
                      )}
                  </Div>
                </div>
              </>
            )}
          </section>
          {/* Page section */}
          <section className="page-section">
            <div className="page-container">
              {/* Article preview main container */}
              <div className="container article-preview-main-container">
                <div className="row art-pre-inner-container">
                  {/* Feed */}
                  <div className="col-9 col-sm-9 col-md-9">
                    {/* Feed component */}
                  </div>
                  {/* Tags */}
                  <div className="col-3 col-sm-3 col-md-3">
                    {/* Tags component */}
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="pagination-footer-section">
            {/*TODO: Add Pagination/Navigation */}
          </section>
        </main>
      </>
    );
  }
}

const Div = styled.div`
  max-width: 1100px;
  width: 100%;
  margin: 2rem auto;
  display: flex;
  justify-content: flex-start;
  .user-article-btn {
    // width:
    font-family: "Source Sans Pro", sans-serif;
    font-weight: 600;
    border: none;
    background-color: transparent;
    color: #aaa;
    margin-right: 1.5rem;
    padding-bottom: 0.7rem;
    &:focus {
      outline: none;
    }
  }
  .active {
    color: rgb(255, 151, 53);
    border-bottom: 2px solid tomato;
  }
`;
