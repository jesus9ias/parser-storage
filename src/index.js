
class parserStorage {

  _json(text) {
    return JSON.parse(text);
  }

  _text(json) {
    return JSON.stringify(json);
  }

  set(key = null, data = "") {
    if (key !== null) {
      window.localStorage.setItem(key, this._text(data));
      return true;
    }
    return false;
  }

  push(key = null, item = null, data = null) {
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

  get(key = null) {
    return this._json(window.localStorage.getItem(key)) || null;
  }

  remove(key = null) {
    if (this.get(key) === null) {
      return false;
    } else {
      window.localStorage.removeItem(key);
      return true;
    }
  }

  updateItem(key = null, item = null, data = null) {
    let element = this.get(key);
    if (element === null) {
      return false;
    } else {
      if (element instanceof Object) {
        element[item] = data;
      }
      return this.set(key, element);
    }
  }

  removeItem(key = null, item = null) {
    let element = this.get(key);
    if (element === null) {
      return false;
    } else {
      if (element instanceof Array) {
        element.splice(item, 1);
      }
      if (element instanceof Object && !(element instanceof Array)) {
        delete element[item];
      }
      return this.set(key, element);
    }
  }

}

let ps = new parserStorage();

if (window) {
  window.parserStorage = ps;
}

export default ps;
