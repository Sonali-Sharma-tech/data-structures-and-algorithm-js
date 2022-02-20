class Node {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  class BFS {
    constructor() {
      this.root = null;
    }
    
    // insert values in binary tree
   insert(val) {
     let newNode = new Node(val);
     if(this.root === null) {
       this.root = newNode;
     } else {
       let queue = [];
       queue.push(this.root);
       while(true) {
         
         let current = queue.shift();
         if(current.left === null) {
           current.left = newNode;
           return current;
         } else if(current.right === null) {
           current.right = newNode;
           return current;
         } else if(current.left!== null) {
           queue.push(current.left);
           queue.push(current.right);
         }
       }
     }
   }
    
   // breadth first traversal in binary tree
    bfsTraverse(root) {
      
      let queue = [];
      queue.push(root);
      let current;
      while(queue.length) {
         current = queue.shift();
           console.log(current.val);
        if(current.left !== null) {
           queue.push(current.left);
        }
        if(current.right !== null) {
           queue.push(current.right);
        }
      }
    }

    // depth first traversal in binary tree
      
    dfsTraverse(root) { // same as preorder traversal Root - Left- right
        let current = root;
        let stack = [];
        stack.push(root);
        while(stack.length){
            while(current !== null) {
            stack.push(current);
            console.log(current.val);
            current = current.left;
            }
            current = stack.pop();
            current = current.right;
        }
    }
  }
  
  var bfs = new BFS();
  bfs.insert(1);
  bfs.insert(2);
  bfs.insert(3);
  bfs.insert(4);
  bfs.insert(5);
  bfs.insert(6);
  bfs.insert(7);
  console.log(bfs);
  bfs.bfsTraverse(bfs.root);
  bfs.dfsTraverse(bfs.root);
  
  
  
  