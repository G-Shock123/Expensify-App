import React from 'react'
import Modal from 'react-modal'

Modal.setAppElement(document.getElementById('app'))

export default class RemoveModal extends React.Component{

    render(){
        return(
            <div>
                <Modal className = "modal"
                    contentLabel = "Remove Modal"
                    isOpen={!!this.props.selectedOption}
                    onRequestClose = {this.props.handleNoChange}
                    closeTimeoutMS={200}
                    
                >
                    <div>
                        <h3> Are you sure you want to remove the expense?</h3>
            
               
                        <button className="button button--alert" onClick ={this.props.handleConfirmRemove}>Yes </button>
                    
                        <button className="button" onClick={this.props.handleNoChange}>No</button>
                    </div>
                </Modal>
            </div>
        )
    }
}