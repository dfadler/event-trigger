define(function() {

    if(!Element.prototype.triggerEvent) {

        Element.prototype.triggerEvent = function(type) {

            var event;

            if (document.createEvent) {

                event = new Event(type);
                this.dispatchEvent(event);

            } else {

                event = document.createEventObject();
                this.fireEvent('on' + type, event);

            }

        };

    }

});