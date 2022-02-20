
class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  class Train {
    constructor() {
     this.head = null;
      this.tail = null;
    }
    
    push(value) {
      let newNode = new Node(value);
      if(!this.head) {
        this.head = newNode;
        this.tail = this.head;
      }
      else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
    }
    
    static showTrain(head) {
      console.log("show");
     let trainDiv =  document.getElementById('train');
      let ptr = head;
      console.log(ptr);
      while(ptr) {
        console.log('in while')
        trainDiv.innerHTML +=`<div>${ptr.value}</div>`;
        ptr = ptr.next;
        
      }   
    }
    reverseDirection() {
      this.tail.next = this.head;// tail -> engine
      this.tail = this.head; // tail = engine
      this.head = this.head.next;//engine -> general1
      this.tail.next = null;
      
    }
    pop() {
      if(!this.head.next && !this.tail.next) {
        this.head = null;
        this.tail = null;
      }
      let ptr = this.head;
      while(ptr.next.next !== null) {
        ptr = ptr.next;
      }
      this.tail = ptr;
      this.tail.next = null;
    }
    shift(value) {
      let newNode = new Node(value);
      newNode.next = this.head;
      this.head = newNode;
    }
    unshift(){
      let ptr = this.head;
      this.head = this.head.next;
      ptr = null;
    }
    insertAtIndex(value, pos) {
      let newNode = new Node(value);
      if(this.head === this.tail || pos === 1) {this.shift(value);}
      else {
      let pre = this.head;
      let count = 1;
      while(count < pos -1 && pre.next !== null) {
        console.log(pre.value)
        pre = pre.next;
        count++;
      }
      newNode.next = pre.next;
      pre.next = newNode
      }
    }
    getNodeFromIndex(index) {
      if(index > 0 && this.head === this.tail){return null;}
      else {
        let count = 0;
        let pre = this.head;
        while(count <index && pre.next !== null) {
          pre = pre.next;
          count++;
        } 
      return pre;
      }
      
    }
    setValueAtIndex(value, index) {
      let count = 0;
      let prev = this.head;
      if(index === 0) shift(value);
      else {
        while(count < index && prev.next !== null) {
          prev = prev.next;
          count++;
        }
        let newNode = new Node(value);
        prev.value = newNode.value;
      }
    }
    removeNodeFromIndex(index) {
      let count = 0;
      let prev = this.getNodeFromIndex(index-1);
      let current = this.getNodeFromIndex(index);
      if(prev && next) {
        prev.next  = current.next;
        current.next = null;
      }
    }
    reverseLinkedList() {
      let prev = null;
      let next = null;
      let current = this.head;
      while(current !== null) {
        next  = current.next;
        current.next = prev;
        prev = current;
        current = next;
      }
      this.tail = this.head;
      this.head = prev;
      
      
    }
  }
  var train = new Train();train.push('engine');train.push('general1');train.push('ac1');
  train.push('tail');
  // train.reverseDirection();
  // train.pop();
  // train.shift("before engine");
  // train.unshift();
  // train.insertAtIndex('me',5);
  // console.log(train.getValueFromIndex(2));
  // train.setValueAtIndex('set',-1);
  // train.reverseLinkedList();
  
  Train.showTrain(train.head);
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  console.log(train);
  