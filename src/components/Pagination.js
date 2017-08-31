import React, { Component } from 'react';
import '../styles/Pagination.scss';
class Pagination extends Component {
	constructor() {
        super();
        
    	this.state = { 
        	value: 0
    	}
    	this._changePage = this._changePage.bind(this)
  	}

	_changePage(event){
		let right;
		const arrow = event.target;
		const arrowClass = arrow.getAttribute('class');
		if(arrowClass.indexOf('pagination__arrow__right') !== -1){
			right = true;
		}
		if(arrowClass.indexOf('pagination__arrow__left') !== -1){
			right = false
		}

		this.props._handlePageChange(right)
	} 
	render() {
	  	const pageNumbers = this.props.pageNumbers
	  	const currentPage = this.props.currentPage
		const renderPageNumbers = pageNumbers.map(number => {
	    	return (
				<li
				  className={ (currentPage === number) ? "pagination__elem pagination__elem--active" : 'pagination__elem' } 
				  key={number}
				  id={number}
				  onClick={this.props._handlePage}
				>
				  {number}
				
				</li>
	       );
	    });


	    return (
			<div className="pagination">
				<ul>
					<span className="pagination__arrow pagination__arrow__left"  onClick={this._changePage}>&#8678;</span>
					{renderPageNumbers}
					<span className="pagination__arrow pagination__arrow__right"  onClick={this._changePage}>&#8680;</span>
				</ul>
				
			</div>
	    );
    }
}

export default Pagination;
