class Node {
    constructor(val) {
      this.val = val;
      this.right = null;
      this.left = null;
    }
  }
  
  class BST {
    constructor() {
      this.root = null;
    }
    
    insert(val) {
      let newNode = new Node(val);
      if (this.root === null ) {
        this.root = newNode;
      } else {
        let current = this.root;
        while(current.left !== null) {
          if ( val < current.val) {
            current = current.left;
          } 
        }
        while(current.right !== null) {
            if ( val > current.val) {
              current = current.right;
            }
        }
        if ( val < current.val && current.left === null) {
          current.left = newNode;
        } else {
          current.right = newNode;
        }
      }
    }
  }
  
//   var bst = new BST();
//   bst.insert(20);
//   console.log(bst);
//   bst.insert(10);
//   console.log(bst);
//   bst.insert(30);
//   console.log(bst);
//   bst.insert(8);
//   console.log(bst);
//   bst.insert(16);
//   console.log(bst);