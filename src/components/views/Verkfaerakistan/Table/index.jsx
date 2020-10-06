import React from 'react';

function getRemedy(data) {
    return data.map((remedyDetail)=>{ return remedyDetail.remedy.remedy});
};

const sortTypes = {
	up: {
		class: 'sort-up',
		fn: (a, b) => ((a.location.toLowerCase() > b.location.toLowerCase()) ? 1 : ((b.location.toLowerCase() > a.location.toLowerCase()) ? -1 : 0))
	},
	down: {
		class: 'sort-down',
		fn: (a, b) => ((a.location.toLowerCase() > b.location.toLowerCase()) ? -1 : ((b.location.toLowerCase() > a.location.toLowerCase()) ? 1 : 0))
	},
	default: {
		class: 'sort',
		fn: (a, b) => a
	}
};

class Table extends React.Component {
	state = {
		currentSort: 'default',
		column: ''
	};
	
	onSortChange = () => {
		const { currentSort } = this.state;
		let nextSort;

		if (currentSort === 'down') nextSort = 'default';
		else if (currentSort === 'up') nextSort = 'down';
		else if (currentSort === 'default') nextSort = 'up';

		this.setState({
			currentSort: nextSort,
			column: 'disorder'
		});
	};
    
	render() {
		const {currentSort} = this.state;
		let remedy = getRemedy(this.props.data);

		return (
			<div className="table-responsive">
				<table className="table table-striped">
					<thead className="thead-dark">
						<tr>
							<th>Úrræði</th>
							<th>Röskun</th>
							<th>
								Staðsetning
								<button onClick={this.onSortChange}>
									<i className={`fas fa-${sortTypes[currentSort].class}`} />
								</button>
							</th>
							<th>símanúmer</th>
							<th>Linkur</th>
						</tr>
					</thead>
					<tbody> 
					{[...remedy[0]].sort(sortTypes[currentSort].fn).map((item, index)=>{
						if(item.link === "") {
							return (
								<tr key={index}>
									<td>{item.title}</td>
									<td>{item.disorder}</td>
									<td>{item.location}</td>
									<td>{item.phone}</td>
									<td>-</td>
								</tr>
							)
						}
						else {
							return (
								<tr key={index}>
									<td>{item.title}</td>
									<td>{item.disorder}</td>
									<td>{item.location}</td>
									<td>{item.phone}</td>
									<td><a className="btn btn-success" href={item.link} role="button">Linkur</a></td>
								</tr>
							)
						}
					})}
					</tbody>
				</table>
			</div>
		);
	}
}

export default Table;