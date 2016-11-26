
class parserStorage {

  _json(text) {
    return JSON.parse(text);
  }

  _text(json) {
    return JSON.stringify(json);
  }

  set(key, data) {
    window.localStorage.setItem(key, this._text(data));
    return true;
  }

  get(key) {
    return this._json(window.localStorage.getItem(key)) || null;
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
