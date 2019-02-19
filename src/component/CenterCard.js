import React from 'react';
import './CenterCard.scss';
import RightModal from '../component/RightModal';

const userData = [
	{
		name: 'Aaron Varghese',
		email: 'aaron@gmail.com',
		mobile: '875-502-0414'
	},
	{
		name: 'Aiden Sandoval',
		email: 'cornelia@gmail.com',
		mobile: '875-502-0414'
	},
	{
		name: 'Amanda Cerny',
		email: 'degeneres@gmail.com',
		mobile: ''
	},
	{
		name: 'Amy Jackson',
		email: 'degeneres@gmail.com',
		mobile: ''
	},
	{
		name: 'Andrew Winfield',
		email: 'aaron@gmail.com',
		mobile: '875-502-0414'
	},
	{
		name: 'Bethy Williamson',
		email: 'aaron@gmail.com',
		mobile: ''
	}
];

class CenterCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			openModal: false
		};
		this.handleFriendClicked = this.handleFriendClicked.bind(this);
		this.handleModalClose = this.handleModalClose.bind(this);
	}
	handleFriendClicked() {
		this.setState({
			openModal: true
		});
	}
	handleModalClose() {
		this.setState({
			openModal: false
		});
	}
	render() {
		return (
			<div>
				<div className="card-container">
					<div style={{backgroundColor: 'white'}}>
						<div className="center-card-header">
							Choose your family members from the list of contacts you have updated
						</div>
						<div className="family-member-card">
							<div className="number-of-family-member">
								<div className="family-text">Family Members</div>
								<div className="number-of-family">0</div>
							</div>
							<div className="family-member-cta">
								<div className="cta-text">Your family members are listed here.</div>
								<button
                                    type="button"
                                    className="button-style"
									data-toggle="modal"
									data-target="#myModal2"
									onClick={this.handleFriendClicked}
								>
									Check Your friends >
								</button>
							</div>
						</div>
					</div>
				</div>
				<div
					className="modal right fade"
					id="myModal2"
					tabindex="-1"
					role="dialog"
					aria-labelledby="myModalLabel2"
				>
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							<div className="modal-header modal-header-bg-color">
								<button
									type="button"
									className="close closeIcons"
									data-dismiss="modal"
									aria-label="Close"
								>
									<div aria-hidden="true">&times;</div>
								</button>
								<h4 className="modal-title" id="myModalLabel2">
									Unidentified(12)
								</h4>
							</div>

							<div className="modal-body modal-body-color">
								<div>Click a contact and select who is to you.</div>
								<div>
									{userData.map((keys) => (
										<div className="contact-card">
											<div className="nameText">{keys.name}</div>
											<div className="emailMobileRow">
												<div>
													<span className="envelope-icon">
														<i className="fa fa-envelope emailStyle" aria-hidden="true" />
													</span>
													<span>{keys.email}</span>
												</div>
												<div>
													<span className="phone-icon">
														<i className="fa fa-phone mobileStyle" aria-hidden="true" />
													</span>
													<span>{keys.mobile}</span>
												</div>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default CenterCard;
