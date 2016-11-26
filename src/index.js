
class parserStorage {

  _json(text) {
    return JSON.parse(text);
  }

  _text(json) {
    return JSON.stringify(json);
  }

  set(key, data) {
    window.localStorage.setItem(key, data);
  }

  get(key) {
    return window.localStorage.getItem(key);
  }

  remove(key) {
    window.localStorage.removeItem(key);
  }

}

export default new parserStorage();
