// created binary tree and its traversal


class Node {
    constructor(val) {
      this.val = val;
      this.right = null;
      this.left = null;
    }
  }
  class BinaryTree {
    constructor() {
      this.root = null;
    }
    
    insert(val) {
      let queue = [];
      let newNode = new Node(val);
      if ( this.root === null) {
        this.root = newNode;
      } else {
        queue.push(this.root);
        while(true) {
           let current = queue.shift();
            // if current.left == null then current.left = newNode;
          if(current.left === null) {
            current.left = newNode;
            return current;
          } 
          //else if current.left !== null then queue.push(current.left)
          else if(current.left !== null) {
            queue.push(current.left);
            // else if current.right === null then current.right = newNode;
            if (current.right === null) {
            current.right = newNode;
             return current;
            } //else if current.right !== null then queue.push(current.right)
            else if (current.right !== null) {
            queue.push(current.right);
            }
         } 
        }
        // another way
        /**
         *  let newNode = new Node(val);
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
                } else {
                    queue.push(current.left);
                    queue.push(current.right);
                }
                }
            }
         */
      }
    }

    inorder(root) { //left - Root - Right
        /**
         * Recursive approach
         * if(root === null) return;
            this.inorder(root.left);
            console.log(root.val);
            this.inorder(root.right);
         */
        /**
         * Iterative approach
         * let stack = [];
   
            let current = root;
            while(stack.length || current !== null) {
            
            while(current !== null) {
                stack.push(current);
                current = current.left;
            }
            current = stack.pop();
            console.log(current.val);
            current = current.right;
            }
         */
           
        
    }
    preorder(root) {
        /**
         * Recursive approach
        if ( root == null) return;
        console.log(root.val);
        this.preorder(root.left);
        this.preorder(root.right);
         */
        /**
         * Iterative approach
         * let stack = [];
   
    let current = root;
    while(stack.length || current !== null) {
      
      while(current !== null){
        console.log(current.val);
        stack.push(current);
        current = current.left;
      }
      current = stack.pop();
      current = current.right;
    }
         */
       
    }
    postorder(root) { // Left - Right - Root
        /**
         * Iterative approach
         * postorder(root) {
   let stack = [];
  
   
    let current = root;
    let prev = null;
     stack.push(root);
    while(stack.length) {
      
      while(current.left !== null){
        stack.push(current);
        current = current.left;
      }
      // if(current.right === null) {
        console.log(current.val);
        if(prev !== null && prev !== root) {
          console.log(prev.val);
        }
        
        prev = stack.pop();
        current = prev.right;
        if(prev === root) {
          prev = null;
        }
      // }
    
     
    }
    console.log(root.val);
  }
         */
        /**
         * Recursive approach
         * if(root === null) return;
            this.postorder(root.left);
            this.postorder(root.right);
            console.log(root.val);
    
         */
    }
  

  }
  
  
  let btree = new BinaryTree();
  btree.insert(1);
  console.log(btree);
  btree.insert(2);
  console.log(btree);
  btree.insert(3);
  console.log(btree);
  btree.insert(4);
  console.log(btree);
  btree.insert(5);
  console.log(btree);
  btree.inorder(btree.root);
  
