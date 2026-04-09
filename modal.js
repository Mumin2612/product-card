export default class Modal {
    constructor(id) {
        this.modalElement = document.querySelector(id);
    }

    open(){
        const closeBtn = this.modalElement.querySelector(".modal__close-btn");
        closeBtn.addEventListener("click", () => this.close());
        this.modalElement.classList.add("modal-showed");
    }

    close(){
        this.modalElement.classList.remove("modal-showed");
    }

    isActive() {
        return this.modalElement.classList.contains("modal-showed");
    }
};