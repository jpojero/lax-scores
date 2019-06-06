import { EventEmitter } from "events";

// "enumerated" event types 
export const LOG_IN_MODAL = "log-in-modal";

class ModalDispatcher extends EventEmitter{

    // Signals the admin lg in modal
    LogInModal(){
        this.emit(LOG_IN_MODAL);
        console.log("Log in fired");
    }
}

// export singleton 
export default new ModalDispatcher();