export default class Form {
     constructor(id) {
        this.id = id;
        this.formElement = document.querySelector(id);
    }

    getValues() {
        const formData = new FormData(this.formElement);
        return Object.fromEntries(formData.entries());
    }

    isValid() {
        return this.formElement.checkValidity();
    }

    clear() {
        this.formElement.reset();
    }
};