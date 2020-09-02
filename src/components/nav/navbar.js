// PACKAGES
import React from 'react'
import NavSegment from './nav_segment'

// IMAGES
import Logo from '../../images/logo_transparent.png'

// DISABLED
// import NavList from './nav_list_materialize'

class Navbar extends React.Component {

	// using this article to update state in this component
	// https://ourcodeworld.com/articles/read/409/how-to-update-parent-state-from-child-component-in-react

	componentDidMount() {
	}
	
	render() {	
		// THE PURPOSE OF THE NAVBAR FUNCTION IS TO RETURN THE JSX TEMPLATE FOR OUR NAVBAR WRAPPER
		return (
			
			// <div>

			// 	<ul className='sidenav cg-blue' id='mobile-links'>
			// 		{/* <NavList activeTab={this.state.activeTab} action={this.handler}/> */}
			// 		<NavList activeTab={this.props.activeTab} action={this.props.action}/>
			// 	</ul>
						
			// 	<nav class="navbar" role="navigation">
					
			// 		{/* 'NAV-WRAPPER' IS A MATERIALIZED CLASS (THE MATERIALIZE CSS FRAMEWORK) */}
			// 		<div className='nav-wrapper cg-blue'>
			// 			{/*'CONTAINER' IS A MATERIALIZED CLASS*/}
			// 			<div className="container">
							
			// 				{/*'BRAND-LOGO' IS A MATERIALIZED CLASS*/}
			// 				<Link to='/' className='brand-logo eggshell-text'>Spa Riley</Link>
			
			// 				<a href="/#" className="sidenav-trigger" data-target='mobile-links'>
			// 					<i className="material-icons left hide-on-large-only">menu</i>
			// 				</a>
							
							
			// 				<ul className='right hide-on-med-and-down'>
			// 					{/* <NavList activeTab={this.state.activeTab} action={this.handler}/> */}
			// 					<NavList activeTab={this.props.activeTab} action={this.props.action}/>
			// 				</ul>
			
			// 				{/* <ul className='sidenav' id='mobile-links'>
			// 					<NavList />
			// 				</ul> */}
							
			// 			</div>
			// 		</div>
					
			// 	</nav>	
			
			// </div>

			<>
				<nav class="navbar has-background-black" role="navigation" aria-label="main navigation">
					<div class="navbar-brand">
						<a class="navbar-item" href="/#">
							<img src={Logo} width="112" height="28" alt="site logo"/>
						</a>

						<a href="/#" role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
							<span aria-hidden="true"></span>
							<span aria-hidden="true"></span>
							<span aria-hidden="true"></span>
						</a>
					</div>

					<div id="navbarBasicExample" class="navbar-menu">
						<div class="navbar-end">
							<NavSegment path="/" label="Home" />

							<div class="navbar-item has-dropdown is-hoverable">
								<a class="navbar-link">
								Services
								</a>

								<div class="navbar-dropdown">

									<NavSegment path="/services/facials" label="Facials" />
									<NavSegment path="/services/waxing" label="Waxing" />
									<NavSegment path="/services/add-ons" label="Add-Ons" />

								{/* FROM BULMA DOCS */}
								{/* <hr class="navbar-divider"/>
								<a class="navbar-item">
									Report an issue
								</a> */}

								</div>
							</div>

							<NavSegment path="/products" label="Products" />
							<NavSegment path="/about" label="About" />
							<NavSegment path="/contact" label="Contact" />

						</div>

						{/* LOGIN AND SIGN UP BUTTONS FROM BULMA DOCS */}
						{/* <div class="navbar-end">
							<div class="navbar-item">
								<div class="buttons">
								<a class="button is-primary">
									<strong>Sign up</strong>
								</a>
								<a class="button is-light">
									Log in
								</a>
								</div>
							</div>
						</div> */}

					</div>
				</nav>
			</>

		)
	}
} ;

export default Navbar ;