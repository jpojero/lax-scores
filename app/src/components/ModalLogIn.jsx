import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, InputGroup, InputGroupAddon, InputGroupText, Button} from "reactstrap";
import ModalDispatcher, { LOG_IN_MODAL } from "../dispatchers/ModalDispatcher";

export class ModalLogIn extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            isOpen: false,          // visible?
        };

    }

    toggle = () =>{
        this.setState({isOpen: !this.state.isOpen});
    }

    // shows the modal for Log In 
    handleLogIn = evt => {
        this.setState({isOpen: true});
    }

    onSubmit(evt){
        // prevent app refresh
        // evt.preventDefault();
        // close and reset modal
        this.setState({isOpen: false});
    }

    componentDidMount(){
        // listen for Log in modal signals
        ModalDispatcher.on(LOG_IN_MODAL, this.handleLogIn);
    }

    componentWillUnmount(){
        // stop listening for Log in modals signals
        ModalDispatcher.removeListener(LOG_IN_MODAL, this.handleLogIn);
    }

    render(){
        return (
            <Modal isOpen={this.state.isOpen} toggle={this.toggle.bind(this)}>
                <ModalHeader toggle={this.toggle.bind(this)}>
                    Log In
                </ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.onSubmit.bind(this)}>
                        <FormGroup>
                            <Label>Username</Label>
                            <Input
                                innerRef={elem => this.usernameInput = elem}
                                type="text"
                                required
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>Password</Label>
                            <InputGroup>
                                <Input
                                    innerRef={elem => this.passwordInput = elem}
                                    type="text"
                                    required
                                />
                            </InputGroup>
                        </FormGroup>
                        <div>
                            <Button>Log In</Button>
                        </div>
                    </Form>
                </ModalBody>
            </Modal>
        );
    }
}