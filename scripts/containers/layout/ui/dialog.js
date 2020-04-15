import React, { Component, Fragment } from 'react'
import ModuleHeader from '../../../common/module-header';
import Ripple from '../../../components/ripple';

import { Row, Col, Alert } from 'react-bootstrap';

import swal from 'sweetalert';

const config = require("../../../helper/config").config;
const notify = require("../../../helper/notify").notify;

export default class UIDialog extends Component {
	constructor(props) {
		super(props)
	}
	componentDidMount(){}
	makeNotif(ev){
		let target = ev.target,
			attr = target.attributes,
			type = attr["data-type"].value,
			from = attr["data-from"].value,
			align = attr["data-align"].value;
		
		var notifier = notify.growl({
			message: "Bootstrap Growl Turning standard Bootstrap alerts into awesome notifications",
			url: "https://roweldev.com ",
			title: "Sample Site ",
			icon: 'zmdi zmdi-info zmdi-hc-fw'
		}, {
			z_index: 1080,
			type: type,
			allow_dismiss: true,
			mouse_over: "pause",
			label: 'Cancel',
			className: 'btn-xs btn-inverse',
			placement: {
				from: from,
				align: align
			},
			delay: 2500,
			spacing: 10,
			animate: {
				enter: 'animated bounceIn',
				exit: 'animated bounceOut'
			},
			offset: {
				x: 20,
				y: 85
			},
			onShown: function(){
				notifier
					.update("title", "")
					.update("message", "This is update")
					.update("icon", "")
					.update("url", "");
				setTimeout(function(){
					notify.growlClose('success')
				}, 1200);
			}
		});
		
	}
	makeNotifAnim(ev){
		let target = ev.target,
			attr = target.attributes,
			type = attr["data-type"].value,
			animIn = attr["data-animation-in"].value,
			animOut = attr["data-animation-out"].value;

		notify.growl({ message: "Bootstrap Growl Turning standard Bootstrap alerts into awesome notifications" }, {
			z_index: 1080,
			type: type,
			allow_dismiss: false,
			mouse_over: "pause",
			label: 'Cancel',
			className: 'btn-xs btn-inverse',
			placement: {
				from: 'top',
				align: 'right'
			},
			delay: 2500,
			spacing: 10,
			animate: {
				enter: animIn,
				exit: animOut
			},
			offset: {
				x: 20,
				y: 85
			}
		});
	}
	makeSwal(type){
		if (type == 'basic') {
			swal("Here's a message!");
		} else if (type == 'txt') {
			swal("Here's a message!", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem erat, tincidunt vitae ipsum et, pellentesque maximus enim. Mauris eleifend ex semper, lobortis purus sed, pharetra felis")
		} else if (type == 'success') {
			swal("Good job!", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem erat, tincidunt vitae ipsum et, pellentesque maximus enim. Mauris eleifend ex semper, lobortis purus sed, pharetra felis", "success")
		} else if (type == 'warning') {
			swal({
				title: "Are you sure?",
				text: "Once deleted, you will not be able to recover this imaginary file!",
				icon: "warning",
				buttons: true,
				dangerMode: true,
			}).then((willDelete) => {
				if (willDelete){
					swal("Deleted!", "Your imaginary file has been deleted.", "success")
				}
			});
		} else if (type == 'param') {
			swal({
				title: "Are you sure?",
				text: "Once deleted, you will not be able to recover this imaginary file!",
				icon: "warning",
				buttons: true,
				dangerMode: true,
			}).then((willDelete) => {
				if (willDelete) {
					swal("Poof! Your imaginary file has been deleted!", {
						icon: "success",
					});
				} else {
					swal("Cancelled", "Your imaginary file is safe :)", "error");
				}
			});
		} else if (type == 'img') {
			swal({
				title: "Sweet!",
				text: "Here's a custom image.",
				icon: config.asset_url +"/assets/img/thumbs-up.png"
			});
		} else if (type == 'timer') {
			swal({
				title: "Auto close alert!",
				text: "I will close in 2 seconds.",
				timer: 2000,
				button: false
			});
		}
	}
	simpleAlert(type) {
		if (type == 'alert'){
			notify.alert("This is basic alert")
		} else if (type == 'confirm') {
		notify.confirm({
			"title": "Are you sure, you want to logout?",
			"left": "No",
			"right": "Yes",
			"fn": () => {
				this.makeSwal("basic")
			}
		});
		} else if (type == 'toast') {
			notify.toast("This is a toast", {
				time: 50000,
				fn: () => {
					
				}
			})
		}
	}
	render() {
		return (
			<Fragment>
				<ModuleHeader text="Dialogs"/>

				<Row>
					<Col sm={12}>
						<div className="card">
							<div className="card-header">
								<h2>Notification
									<small>Animated Alerts with custome types and alignments</small>
								</h2>
							</div>
							<div className="card-body card-padding">
								<div className="f-500 m-b-20 c-black">Notificaions</div>
								<Row className="notifications">
									<Col xs={6} sm={2}>
										<Ripple type="button" className="btn btn-primary" onClick={(event) => { this.makeNotif(event) }} data-type="inverse" data-from="top" data-align="left">Top Left</Ripple>
									</Col>
									<Col xs={6} sm={2}>
										<Ripple type="button" className="btn btn-primary" onClick={(event) => { this.makeNotif(event) }} data-type="inverse" data-from="top" data-align="right">Top Right</Ripple>
									</Col>
									<Col xs={6} sm={2}>
										<Ripple type="button" className="btn btn-primary" onClick={(event) => { this.makeNotif(event) }} data-type="inverse" data-from="top" data-align="center">Top Center</Ripple>
									</Col>
									<Col xs={6} sm={2}>
										<Ripple type="button" className="btn btn-primary" onClick={(event) => { this.makeNotif(event) }} data-type="inverse" data-from="bottom" data-align="left">Bottom Left</Ripple>
									</Col>
									<Col xs={6} sm={2}>
										<Ripple type="button" className="btn btn-primary" onClick={(event) => { this.makeNotif(event) }} data-type="inverse" data-from="bottom" data-align="right">Bottom Right</Ripple>
									</Col>
									<Col xs={6} sm={2}>
										<Ripple type="button" className="btn btn-primary" onClick={(event) => { this.makeNotif(event) }} data-type="inverse" data-from="bottom" data-align="center">Bottom Center</Ripple>
									</Col>
								</Row>
								<div className="f-500 m-b-20 c-black">Type</div>
								<Row className="notifications">
									<Col xs={6} sm={2}>
										<Ripple type="button" className="btn btn-primary" onClick={(event) => { this.makeNotif(event) }} data-type="inverse" data-from="top" data-align="right">Inverse</Ripple>
									</Col>
									<Col xs={6} sm={2}>
										<Ripple type="button" className="btn btn-info" onClick={(event) => { this.makeNotif(event) }} data-type="info" data-from="top" data-align="right">Info</Ripple>
									</Col>
									<Col xs={6} sm={2}>
										<Ripple type="button" className="btn btn-success" onClick={(event) => { this.makeNotif(event) }} data-type="success" data-from="top" data-align="right">Success</Ripple>
									</Col>
									<Col xs={6} sm={2}>
										<Ripple type="button" className="btn btn-warning" onClick={(event) => { this.makeNotif(event) }} data-type="warning" data-from="top" data-align="right">Warning</Ripple>
									</Col>
									<Col xs={6} sm={2}>
										<Ripple type="button" className="btn btn-danger" onClick={(event) => { this.makeNotif(event) }} data-type="danger" data-from="top" data-align="right">Danger</Ripple>
									</Col>
								</Row>
								<div className="f-500 m-b-20 c-black">Animation</div>
								<Row className="notifications">
									<Col xs={6} sm={2}>
										<Ripple type="button" className="btn btn-primary" onClick={(event) => { this.makeNotifAnim(event) }} data-type="inverse" data-animation-in="animated fadeIn" data-animation-out="animated fadeOut">Fade In</Ripple>
									</Col>
									<Col xs={6} sm={2}>
										<Ripple type="button" className="btn btn-primary" onClick={(event) => { this.makeNotifAnim(event) }} data-type="inverse" data-animation-in="animated fadeInLeft" data-animation-out="animated fadeOutLeft">Fade In Left</Ripple>
									</Col>
									<Col xs={6} sm={2}>
										<Ripple type="button" className="btn btn-primary" onClick={(event) => { this.makeNotifAnim(event) }} data-type="inverse" data-animation-in="animated fadeInRight" data-animation-out="animated fadeOutRight">Fade In Right</Ripple>
									</Col>
									<Col xs={6} sm={2}>
										<Ripple type="button" className="btn btn-primary" onClick={(event) => { this.makeNotifAnim(event) }} data-type="inverse" data-animation-in="animated fadeInUp" data-animation-out="animated fadeOutUp">Fade In Up</Ripple>
									</Col>
									<Col xs={6} sm={2}>
										<Ripple type="button" className="btn btn-primary" onClick={(event) => { this.makeNotifAnim(event) }} data-type="inverse" data-animation-in="animated fadeInDown" data-animation-out="animated fadeOutDown">Fade In Down</Ripple>
									</Col>
									<Col xs={6} sm={2}>
										<Ripple type="button" className="btn btn-primary" onClick={(event) => { this.makeNotifAnim(event) }} data-type="inverse" data-animation-in="animated bounceIn" data-animation-out="animated bounceOut">Bounce In</Ripple>
									</Col>

									<Col xs={6} sm={2}>
										<Ripple type="button" className="btn btn-primary" onClick={(event) => { this.makeNotifAnim(event) }} data-type="inverse" data-animation-in="animated bounceInLeft" data-animation-out="animated bounceOutLeft">Bounce In Left</Ripple>
									</Col>
									<Col xs={6} sm={2}>
										<Ripple type="button" className="btn btn-primary" onClick={(event) => { this.makeNotifAnim(event) }} data-type="inverse" data-animation-in="animated bounceInRight" data-animation-out="animated bounceOutRight">Bounce In Right</Ripple>
									</Col>
									<Col xs={6} sm={2}>
										<Ripple type="button" className="btn btn-primary" onClick={(event) => { this.makeNotifAnim(event) }} data-type="inverse" data-animation-in="animated bounceInUp" data-animation-out="animated bounceOutUp">Bounce In Up</Ripple>
									</Col>
									<Col xs={6} sm={2}>
										<Ripple type="button" className="btn btn-primary" onClick={(event) => { this.makeNotifAnim(event) }} data-type="inverse" data-animation-in="animated rotateInDownRight" data-animation-out="animated rotateOutUpRight">Fall In Right</Ripple>
									</Col>
									<Col xs={6} sm={2}>
										<Ripple type="button" className="btn btn-primary" onClick={(event) => { this.makeNotifAnim(event) }} data-type="inverse" data-animation-in="animated rotateIn" data-animation-out="animated rotateOut">Rotate In</Ripple>
									</Col>
									<Col xs={6} sm={2}>
										<Ripple type="button" className="btn btn-primary" onClick={(event) => { this.makeNotifAnim(event) }} data-type="inverse" data-animation-in="animated flipInX" data-animation-out="animated flipOutX">Flip In X</Ripple>
									</Col>

									<Col xs={6} sm={2}>
										<Ripple type="button" className="btn btn-primary" onClick={(event) => { this.makeNotifAnim(event) }} data-type="inverse" data-animation-in="animated flipInY" data-animation-out="animated flipOutY">Flip In Y</Ripple>
									</Col>
								</Row>
							</div>
						</div>

						<div className="card">
							<div className="card-header">
								<h2>Dialog
									<small>
										<a className="colored" href="https://sweetalert.js.org/" target="_blank">SweetAlert</a> makes popup messages easy and pretty. 
									</small>
								</h2>
							</div>
							<div className="card-body card-padding">
								<Row className="dialog">
									<Col sm={3}>
										<p className="f-500 c-black m-b-20">Basic Example</p>
										<Ripple type="button" className="btn btn-info" onClick={() => { this.makeSwal('basic') }} >Click me</Ripple>
									</Col>
									<Col sm={3}>
										<p className="f-500 c-black m-b-20">A title with a text under</p>
										<Ripple type="button" className="btn btn-info" onClick={() => { this.makeSwal('txt') }}>Click me</Ripple>
									</Col>
									<Col sm={3}>
										<p className="f-500 c-black m-b-20">A success message!</p>
										<Ripple type="button" className="btn btn-info" onClick={() => { this.makeSwal('success') }}>Click me</Ripple>
									</Col>
									<Col sm={3}>
										<p className="f-500 c-black m-b-20">A warning message, with a function attached to the "Confirm"-button...</p>
										<Ripple type="button" className="btn btn-info" onClick={() => { this.makeSwal('warning') }}>Click me</Ripple>
									</Col>

									<Col sm={3}>
										<p className="f-500 c-black m-b-20">By passing a parameter, you can execute something else for "Cancel".</p>
										<Ripple type="button" className="btn btn-info" onClick={() => { this.makeSwal('param') }}>Click me</Ripple>
									</Col>
									<Col sm={3}>
										<p className="f-500 c-black m-b-20">A message with custom Image Header</p>
										<Ripple type="button" className="btn btn-info" onClick={() => { this.makeSwal('img') }}>Click me</Ripple>
									</Col>
									<Col sm={3}>
										<p className="f-500 c-black m-b-20">A message with auto close timer</p>
										<Ripple type="button" className="btn btn-info" onClick={() => { this.makeSwal('timer') }}>Click me</Ripple>
									</Col>
								</Row>
							</div>
						</div>

						<div className="card">
							<div className="card-header">
								<h2>Supper Lighweight Alert</h2>
							</div>
							<div className="card-body card-padding">
								<Row className="notifications">
									<Col xs={4} sm={2}>
										<Ripple type="button" className="btn btn-primary" onClick={() => { this.simpleAlert("alert") }} >Alert</Ripple>
									</Col>
									<Col xs={4} sm={2}>
										<Ripple type="button" className="btn btn-primary" onClick={() => { this.simpleAlert("confirm") }} >Confirm</Ripple>
									</Col>
									<Col xs={4} sm={2}>
										<Ripple type="button" className="btn btn-primary" onClick={() => { this.simpleAlert("toast") }} >Toast</Ripple>
									</Col>
								</Row>
							</div>
						</div>
					</Col>
				</Row>
			</Fragment>
		)
	}
}