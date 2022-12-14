import React from 'react'

function PriceCard(props) {
    console.log(props.data)
  return <>
   <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{props.data.plan}</h5>
            <h6 className="card-price text-center">${props.data.price}<span className="period">/month</span></h6>
            <hr/>
            <ul className="fa-ul">
              <li className={props.data.isUser?"":"text-muted"}><span className="fa-li"><i className={props.data.isUser?"fas fa-check":"fas fa-times"}></i></span>{props.data.User}</li>
              <li className={props.data.isstorage?"":"text-muted"}><span className="fa-li"><i className={props.data.isstorage?"fas fa-check":"fas fa-times"}></i></span>{props.data.storage}</li>
              <li className={props.data.ispublicprojects?"":"text-muted"}><span className="fa-li"><i className={props.data.ispublicprojects?"fas fa-check":"fas fa-times"}></i></span>{props.data.publicprojects}</li>
              <li className={props.data.iscommunityAcess?"":"text-muted"}><span className="fa-li"><i className={props.data.iscommunityAcess?"fas fa-check":"fas fa-times"}></i></span>{props.data.communityAcess}</li>
              <li className={props.data.isprivateprojects?"":"text-muted"}><span className="fa-li"><i className={props.data.isprivateprojects?"fas fa-check":"fas fa-times"}></i></span>{props.data.privateprojects}</li>
              <li className={props.data.isphone?"":"text-muted"}><span className="fa-li"><i className={props.data.isphone?"fas fa-check":"fas fa-times"}></i></span>{props.data.phone}</li>
              <li className={props.data.issubdomain?"":"text-muted"}><span className="fa-li"><i className={props.data.issubdomain?"fas fa-check":"fas fa-times"}></i></span>{props.data.subdomain}</li>
              <li className={props.data.isreports?"":"text-muted"}><span className="fa-li"><i className={props.data.isreports?"fas fa-check":"fas fa-times"}></i></span>{props.data.reports}</li>
              
            </ul>
            <div className="d-grid">
              <a href="https://cdnjs.com/libraries/font-awesome" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
  </>
}

export default PriceCard