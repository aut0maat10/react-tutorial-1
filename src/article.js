import React, { Component } from 'react';
//import style from '../client/style/main.css';

//Basic Article Component
class Article extends Component {
  constructor(props) {
    super(props);

    //initial state
    this.state = {};
  }

  //Component Lifecycle
  //https://reactjs.org/docs/react-component.html#the-component-lifecycle
  /* DEPRECATED LIFECYCLE METHODS BELOW
  UNSAFE_componentWillMount() {
    console.log('component will mount');
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log('component will receive props');
  }
  UNSAFE_componentWillUpdate() {
    console.log('component will update');
  }
  */


  static getDerivedStateFromProps(props, state) {
    console.log('get derived state from props');
    return null;
  }

  componentDidMount() {
    console.log('component did mount');
  }
  shouldComponentUpdate() {
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('get snapshot before update');
    return { foo: 'bar' };
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('component did update');
  }
  componentWillUnmount() {
    console.log('component will unmount');
  }

  //this fires every time a prop or state changes
  //to use any prop, use this.props.NAME_OF_PROP
  //use {} to add JS expressions
  //use className to add CSS classes
  //remember that this is not HTML!!
  //https://reactjs.org/docs/introducing-jsx.html
  render() {
    const { headline, summary, showSummary, image, category, shareLink} = this.props;
    const summaryDisplay = showSummary ? <div className="article-summary">{summary}</div> : '';
    const defaultImage = 'https://i.imgur.com/Bzr6JZy.jpg';

    // add default image if no image available
    let img;
    if (!image) {
      img = <img className="img" src={defaultImage} />
    }
    else {
      img = <img className="img" src={image} />
    }

    return (
      <div className="article-card">
        <h3 className="headline">{headline}</h3>
        {img}
        <div className="category">
          <p>{category}</p>
        </div>
        <div className="overlay">
          <div className="summary">
            {summary}
          </div>
          <a className="btn" href={shareLink}>Read More <span className="arrow">&rarr;</span></a>
        </div>
      </div>
    )
  }
};

//set default props here, if any
Article.defaultProps = {};

//export so others can use
export default Article;
