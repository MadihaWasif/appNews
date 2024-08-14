import React, { Component } from 'react'
import News from './News'
import Spinner from './Spinner';
import PropTypes from 'prop-types';


export class NewsItem extends Component {

  static defaultProps = {
    country: 'in',
    category: 'general'
  }
  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
  }

 
  constructor(props) {
    super(props);
    console.log("hello i am a constructor");
    this.state = {
      articles: [],
      page: 1,
      pageSize: 6,
      totalResults: 4
    }
    document.title= `${this.props.category} - NewsKangaroo`;

  }

  async updateNews() {
    console.log("news updated");
      let myurl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=42cd70df6450445d9246f7f8d0b5beff&page=${this.state.page + 1}&pageSize=${this.state.pageSize}`;
      this.setState({loading: true})
      let data = await fetch(myurl);
      let data2 = await data.json();
      console.log(data2);
      this.setState({
      articles: data2.articles,
      loading: false
    })
  }

  async componentDidMount() {
    console.log("hello cdm")
    let myurl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=42cd70df6450445d9246f7f8d0b5beff&page=1&pageSize=${this.state.pageSize}`;
    this.setState({loading: true})
    let data = await fetch(myurl);
    let data2 = await data.json();
    console.log(data2);
    this.setState({articles: data2.articles, totalResults: data2.totalResults, loading: false});


  }

  clickNext = async ()=> {
    console.log("next");
      // let myurl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=42cd70df6450445d9246f7f8d0b5beff&page=${this.state.page + 1}&pageSize=${this.state.pageSize}`;
      // this.setState({loading: true})
      // let data = await fetch(myurl);
      // let data2 = await data.json();
      // console.log(data2);
      this.setState({
      page: this.state.page + 1,
      // articles: data2.articles,
      // loading: false
    })
    this.updateNews();

  }
      
    

  clickPrevious = async ()=> {
    console.log("previos");
    // let myurl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=42cd70df6450445d9246f7f8d0b5beff&page=${this.state.page-1}&pageSize=${this.state.pageSize}`;
    // this.setState({loading: true})
    // let data = await fetch(myurl);
    // let data2 = await data.json();
    // console.log(data2);
    this.setState({
      page: this.state.page - 1,
      // articles: data2.articles,
      // loading: false
    })
    this.updateNews();
  }


  render() {
    
    return (
      <div className='container my-3'>
       <h2>News-Kangaroo From  {this.props.category}</h2>
        {this.state.loading && <Spinner />}
          <div className='row'>
            {this.state.articles.map((ele)=>{
              return <div className='col-md-4'>
              <News key={ele.url} title={ele.title} MyDesc={ele.description} imageUrl={ele.urlToImage} newsUrl={ele.url} author={ele.author} date={ele.publishedAt} source={ele.source.name}/>           
            </div>
            })}
            <div className="container d-flex justify-content-between">
              <button disabled={this.state.page<=1} className='btn btn-dark' onClick={this.clickPrevious}> &larr; Previous
              </button>
              <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.state.pageSize)} className='btn btn-dark' onClick={this.clickNext}>Next &rarr;</button>
            </div>
            
            
          </div>
      </div>
    )
  }
}

export default NewsItem
