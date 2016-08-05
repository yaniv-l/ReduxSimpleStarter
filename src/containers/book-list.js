import React from 'react';
import { Component } from 'react'
import { connect } from 'react-redux';
import { selectBook } from '../actions/index'
import { bindActionCreators } from 'redux';


class BookList extends Component{
  renderList(){
    return this.props.books.map((book)=>{
      return(
        <li
          key={book.title}
          // <!--onClick will invoke redux action creator which is exposed under this.props since we mapDispatchToProps -->
          onClick={()=> this.props.selectBook(book)}
          className="list-group-item">{book.title}</li>
      );
    });
  }

  render(){
    return(
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state){
  // Whatever gets return from here will showup as props inside of BookList
  return{
    books: state.books
  };
}

//Anything returned from the this function will end up as props on the BookList container
function mapDispatchToProps(dispatch){
  //Whenever selectBook is called, the result should be passed to all of our reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}


//The connect function takes a function (mapStateToProps) and a Component{BookList} and merge the tow into a container (or a SmartComponent)
//Promote BookList from a component to a container - it needs to know about this new dispatch method, selectBook. Make it available as a prop
  export default connect(mapStateToProps, mapDispatchToProps)(BookList);
