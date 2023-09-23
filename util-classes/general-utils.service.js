class GeneralUtilsService {
  getFormData(form) {
    const formData = new FormData(form);
  
    return Object.fromEntries(formData);
  };
  
  createRandomId() {
    return Math.random().toString(16).slice(2);
  };
}

export default new GeneralUtilsService();