export class Modal {
  constructor(modalId, buttonId, shouldCloseOnOverlay) {
    this.modal = document.getElementById(modalId);
    this.overlay = document.getElementById('overlay');
    this.shouldCloseOnOverlay = shouldCloseOnOverlay; 
    this.#initOpen(buttonId);
  }

  open() {
    this.#initClose(this.shouldCloseOnOverlay);
    this.modal.classList.add('modal-showed');
    this.overlay.classList.add('overlay-showed');
  }

  close() {
    this.modal.classList.remove('modal-showed');
    this.overlay.classList.remove('overlay-showed');
    if (this.shouldCloseOnOverlay) {
      this.overlay.removeEventListener('click', this.handleOverlayClick)
      this.modal.querySelector('#modal-close-button').removeEventListener('click', this.handleCloseClick);
    }
  }

  handleCloseClick = () => {
    this.close();
  }

  handleOverlayClick = () => {
    this.close();
  } 

  isOpen() {
    return this.modal.classList.contains('modal-showed');
  }

  #initOpen(buttonId) {
    const button = document.getElementById(buttonId);
    button.addEventListener('click', () => {
      this.open();
    })
  }

  #initClose(shouldCloseOnOverlay) {
    const closeButton = this.modal.querySelector('#modal-close-button');
    if (shouldCloseOnOverlay) {
      this.overlay.addEventListener('click', this.handleOverlayClick);
      this.modal.querySelector('#modal-close-button').addEventListener('click', this.handleCloseClick);
    } 
  }
}