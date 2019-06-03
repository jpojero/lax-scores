import { EventEmitter } from "events";

export const ADMIN_LOG_IN_MODAL = "admin-log-in-modal";

class ModalDispatcher extends EventEmitter{

    // Signals the admin lg in modal
    AdminLogInbModal(){
        this.emit(ADMIN_LOG_IN_MODAL);
    }
}