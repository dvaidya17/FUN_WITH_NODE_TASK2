
const events = [];

class Scheduler{

     constructor(start, end){
      this.start = start;
      this.end = end;
     }

     addEvents() {
        for(let i = 0; i<events.length; i++)
        {
           if(Math.max(this.start, events[i][0]) <= Math.min(this.end, events[i][1])) return false;
        }
        events.push([this.start, this.end]);
        events.sort();
        return true;
     }

     getEvents() {
           return events;
     }

}

module.exports = Scheduler;