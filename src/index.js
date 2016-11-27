
class parserStorage {

  _json(text) {
    return JSON.parse(text);
  }

  _text(json) {
    return JSON.stringify(json);
  }

  set(key = false, data = "") {
    window.localStorage.setItem(key, this._text(data));
    return true;
  }

  push(key = false, item = null, data = null) {
    const element = this.get(key);
    let newElement = null;
    if (typeof element === 'string') {
      if (data === null) {
        newElement = [element, item];
      } else {
        newElement = {0: element, [item]: data};
      }
    }
    if (element instanceof Array) {
      if (data === null) {
        newElement = [...element, item];
      } else {
        newElement = {};
        element.forEach((elem, index) => {
          newElement[index] = elem;
        });
        newElement[item] = data;
      }
    }
    if (element instanceof Object && !(element instanceof Array)) {
      element[item] = data;
      newElement = element;
    }
    return this.set(key, newElement);
  }

  get(key = false) {
    return this._json(window.localStorage.getItem(key)) || null;
  }

  remove(key = false) {
    if (this.get(key) === null) {
      return false;
    } else {
      window.localStorage.removeItem(key);
      return true;
    }
  }

}

export default new parserStorage();
