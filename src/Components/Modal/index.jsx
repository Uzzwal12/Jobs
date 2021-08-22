import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import './modal.css'
import { showModal } from "../../redux/Actions/post";

const data = [
  {
    name: 'Eliza Lucas',
    email: 'abc123@email.com',
    skills: 'Coding, designing, graphics, website, app ui'
  }, {
    name: 'Eliza Lucas',
    email: 'abc123@email.com',
    skills: 'Coding, designing, graphics, website, app ui'
  }, {
    name: 'Eliza Lucas',
    email: 'abc123@email.com',
    skills: 'Coding, designing, graphics, website, app ui'
  }, {
    name: 'Eliza Lucas',
    email: 'abc123@email.com',
    skills: 'Coding, designing, graphics, website, app ui'
  }, {
    name: 'Eliza Lucas',
    email: 'abc123@email.com',
    skills: 'Coding, designing, graphics, website, app ui'
  }, {
    name: 'Eliza Lucas',
    email: 'abc123@email.com',
    skills: 'Coding, designing, graphics, website, app ui'
  }, {
    name: 'Eliza Lucas',
    email: 'abc123@email.com',
    skills: 'Coding, designing, graphics, website, app ui'
  }, {
    name: 'Eliza Lucas',
    email: 'abc123@email.com',
    skills: 'Coding, designing, graphics, website, app ui'
  }, 
]

const Modal = () => {
  const dispatch = useDispatch()
  const [list, setList] = useState(data)

  return (
    <div className="modal-wrapper">
      <div className="modal-children">
        <div className="modal-head">
          <div className="modal-heading">
            Applicants for this job
            <i className="fas fa-times" onClick={() => dispatch(showModal(false))} />
          </div>
          <div>{list.length ? `Total ${list.length}` : '0'} applications</div>
        </div>
        <div className="modal-content">
          {list.length ? (
            <div className="modal-content-list">
              <div className="list-flex">
                {list.map((obj) => (
                  <div className="modal-card">
                    <div className="card-name">
                      <div className="first-char">{obj.name.charAt(0)}</div>
                      <div className="detail-div">
                        <span className="name-span">{obj.name}</span>
                        <span className="email-span">{obj.email}</span>
                      </div>
                    </div>
                    <div className="card-skills">
                      <div>Skills</div>
                      <div>{obj.skills}</div>
                    </div>
                  </div>
                ))}
            </div>
            </div>
          ) : (
            <div className="modal-empty-div">
              <i className="fas fa-file-alt post-icon"></i>
              <span className="empty-text">No applications available!</span>
            </div>
            )}        
        </div>
      </div>
    </div>
  )
}

export default Modal
