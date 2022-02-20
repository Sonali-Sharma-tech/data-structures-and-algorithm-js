

// Javascript program to add two numbers
// represented by linked list

	var head1, head2;

	class Node {
			constructor(val) {
				this.data = val;
				this.next = null;
			}
		}
	

	/*
	Adds contents of two linked lists and return
	the head node of resultant list
	*/
	function addTwoLists( first, second) {
		// res is head node of the resultant list
		var res = null;
		var prev = null;
		var temp = null;
		var carry = 0, sum;

		// while both lists exist
		while (first != null || second != null) {
			// Calculate value of next
			// digit in resultant list.
			// The next digit is sum
			// of following things
			// (i) Carry
			// (ii) Next digit of first
			// list (if there is a next digit)
			// (ii) Next digit of second
			// list (if there is a next digit)
			sum = carry + (first != null ? first.data : 0) +
			(second != null ? second.data : 0);

			// update carry for next calculation
			carry = (sum >= 10) ? 1 : 0;

			// update sum if it is greater than 10
			sum = sum % 10;

			// Create a new node with sum as data
			temp = new Node(sum);

			// if this is the first node then set
			// it as head of the resultant list
			if (res == null) {
				res = temp;
			}

			// If this is not the first
			// node then connect it to the rest.
			else {
				prev.next = temp;
			}

			// Set prev for next insertion
			prev = temp;

			// Move first and second pointers
			// to next nodes
			if (first != null) {
				first = first.next;
			}
			if (second != null) {
				second = second.next;
			}
		}

		if (carry > 0) {
			temp.next = new Node(carry);
		}

		// return head of the resultant list
		return res;
	}
	/* Utility function to print a linked list */

	function printList( head) {
		while (head != null) {
			document.write(head.data + " ");
			head = head.next;
		}
		document.write("<br/>");
	}

	// Driver Code
	
	

		// creating first list
		head1 = new Node(7);
		head1.next = new Node(5);
		head1.next.next = new Node(9);
		head1.next.next.next = new Node(4);
		head1.next.next.next.next = new Node(6);
		document.write("First List is ");
		printList(head1);

		// creating second list
		head2 = new Node(8);
		head2.next = new Node(4);
		document.write("Second List is ");
		printList(head2);

		// add the two lists and see the result
		rs = addTwoLists(head1, head2);
		document.write("Resultant List is ");
		printList(rs);


