/**
 * i /p - [2,4] [3, 5]
 * o/p - [9, 6] reverse linkedlist
 * time complexity - o(n)
 * space complexity - o(n)
 * 
 */
class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  class NewList {
    constructor() {
      this.root = null;
    }
    
    addTwoNumber (l1, l2) {
      console.log(l1)
    let curr1 = l1.root;
    let curr2 = l2.root;
    while(curr1 !== null && curr2 !== null ) {
      let value = curr1.val + curr2.val;
       this.insert(value);
     
      curr1 = curr1.next;
      curr2 = curr2.next;
     }
    }
   
    insert (val) {
      let newNode = new Node(val);
      if(this.root === null) {
        this.root = newNode;
       } else {
        
        let current = this.root;
        while(current.next !== null) {
          current = current.next;
         }
        current.next = newNode;
       }
      }
    reverse() {
      let prev = null;
      let current = this.root;
      let nextptr = this.root.next;
  
      while(current !== null) {
       
        current.next = prev;
       
        prev = current;
        current = nextptr;
       
        nextptr = nextptr.next || null;
      }
      this.root = prev;
    }
    
  }
  var list1 = new NewList();
  list1.insert(2);
  list1.insert(3);
  // console.log(list1);
  var list2 = new NewList();
  list2.insert(4);
  list2.insert(5);
  // console.log(list2);
  var list = new NewList();
  list.addTwoNumber(list1, list2);
  // console.log(list);
  list.reverse();
  console.log(list);
  
  
  
  
  
  //