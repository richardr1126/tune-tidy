// Observer pattern implementation
class Observable {
  constructor() {
    this.observers = [];
  }

  subscribe(f, identifier) {
    this.observers.push({ func: f, identifier: identifier });
  }

  unsubscribe(identifier) {
    this.observers = this.observers.filter(subscriber => subscriber.identifier !== identifier);
  }

  notify(data) {
    this.observers.forEach(observer => observer.func(data));
  }
}

export default Observable;
