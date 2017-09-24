import React, {Component} from 'react';
import '../css/navigation.css';

const MenuCol=(props)=>{
	return(
		<div className={props.className} id={props.id}>
					<p className="menuHeader d1">DESSERTS</p>
					<div className="itemD1">
						<h5 className="itemName">ICECREAM</h5>
						<p> Lorem ipsum dolor sit amet salerma pet sea </p>
						<button>$3.95</button>
					</div>
					<div className="itemD1 itemD2">
						<h5 className="itemName">TIRAMISU</h5>
						<p> Lorem ipsum dolor sit amet salerma pet sea </p>
						<button>$3.95</button>
					</div>
					<div className="itemD1 itemD3">
						<h5 className="itemName">CHOCOLATE BROWNIE</h5>
						<p> Lorem ipsum dolor sit amet salerma pet sea </p>
						<button>$3.95</button>
					</div>
		</div>
		);
}

class OurMenu extends Component{
	constructor(props){
		super(props);
		this.state={
			menuColIdUp:'',
			menuColIdDown:''
		};
	}
	componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
}

handleScroll=(event)=> {
	console.log("doc", document.documentElement.scrollTop, "home", document.querySelector('.Home').offsetHeight,
		"comm", document.querySelector('.Community').offsetHeight);
	if (document.documentElement.scrollTop >= document.querySelector('.Home').offsetHeight + document.querySelector('.Community').offsetHeight) {
		this.setState(prevState=>{
			return{menuColIdUp:'animate',menuColIdDown:'animateDown'};
		});
	}
}
	render(){
		return(
			<div className="ourMenu" id="123">
				<div id="center"></div>
				<div id="left"></div>
				<div id="right"></div>
				<p className="menuHeader">OUR MENU</p>
				<button id="knowMore">KNOW MORE</button>
				<MenuCol className="menuCol4 menuCol4L" id={this.state.menuColIdDown} />
				<MenuCol className="menuCol4 menuCol3" id={this.state.menuColIdUp} />
				<MenuCol className="menuCol4 menuCol2" id={this.state.menuColIdDown} />
				<MenuCol className="menuCol4 menuCol1" id={this.state.menuColIdUp} />
			</div>
			);
	}
}

export default OurMenu;