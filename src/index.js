
class parserStorage {

  _json(text) {
    return JSON.parse(text);
  }

  _text(json) {
    return JSON.stringify(json);
  }

  set(key, data) {
    window.localStorage.setItem(key, data);
    return true;
  }

  get(key) {
    return window.localStorage.getItem(key) || null;
  }

  remove(key) {
    if (this.get(key) === null) {
      return false;
    } else {
      window.localStorage.removeItem(key);
      return true;
    }
  }

}

export default new parserStorage();
