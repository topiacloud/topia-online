define(["engine/observer"], function (Observer) {

    var node = function(value, container) {
        this.container = container;
        this.value = value;
        this.next = null;
        this.previous = container.lastItem;
        this.observer = new Observer(value, container);
    };

    return node;
});