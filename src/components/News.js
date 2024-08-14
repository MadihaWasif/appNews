import React, { Component } from 'react'


export class News extends Component {
  render() {
    let { title, MyDesc, imageUrl, newsUrl, date, author, source} = this.props;
    return (
      <div>
        <div className="card mx-3 my-2" style={{ width: "18rem" }}>
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{position: 'absolute', left: '80%'}}>{source}
        </span>
          <img src={imageUrl} className="card-img-top" alt="image" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{MyDesc}</p>
            <p class="card-text"><small class="text-body-secondary">By: {author == null ? "Unknown" : author}</small></p>
            <p class="card-text"><small class="text-body-secondary">Time: {date} </small></p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default News
