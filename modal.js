export default class Modal {
    constructor(id) {
        this.id = id
        this.modalElement = document.querySelector(id)

        const closeBtn = this.modalElement.querySelector(".modal__close-btn")
        closeBtn.addEventListener("click", () => this.close())
    }

    open(){
        this.modalElement.classList.add("modal-showed")
    }

    close(){
        this.modalElement.classList.remove("modal-showed")
    }

    isActive() {
        return this.modalElement.classList.contains("modal-showed")
    }
}