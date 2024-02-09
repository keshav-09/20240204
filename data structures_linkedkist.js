/** this is the node class which will take data as a input
 * @param this.data =that the data in the node
 */
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
/** this is the linked list class 
 * @param this.head first node of the linked list 
 * @param this.tail last node of the linked list
 */
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    /** 
     * @param current is used to set the value to the top i.e head
     */
    printALL() {
        let current = this.head;
        while (current !== null) {
            console.log(current.data);
            current = current.next;
        }
    
    }

    /** this is use to insert the data at any location in the linked list 
     * @param {number} data-value that you want to insert
     * @param {number} location -location at which you want to insert 
    */
    insert(data, location) {
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            let temp = this.head;
            let index = 0;

            while (index < location - 1) {
                temp = temp.next;
                index += 1;
            }
            newNode.next = temp.next;
            temp.next = newNode;
            if (temp === this.tail) {
                this.tail = newNode;
            }
        }
        this.length++;
    }
    /** this is use to travel the linked list and print the element of that linked list */
    traveltheLL() {
        let node = this.head;
        if (node === null) {
            console.log("This linked list is empty");
        } else {
            while (node !== null) {
                console.log(node.data);
                node = node.next;
            }
        }
    }
    /** here we search the element in the linked list 
     * condition
     * @param {number} dataval value that you have to find in linked list
     * linked list is empty and if not then print the element of the list
    */
    search(dataval) {
        let node = this.head;
        while (node !== null) {
            if (node.data === dataval) {
                console.log(`The value is present: ${node.data}`);
            }
            node = node.next;
        }
        console.log("The value is not present");
    }

    /**
     * This @param {delete} will have three cases:
     * @param {number} location location of the number to delete
     * 1. If the linked list is empty
     * 2. If it contains only one element
     * 3. If it contains multiple elements, delete the middle element
     */
    delete(location) {
        if (this.head === null) {
            console.log("The list is empty");
        } else {
            if (location === 0) {
                if (this.head === this.tail) {
                    this.head = null;
                    this.tail = null;
                } else {
                    this.head = this.head.next;
                }
            } else if (location === -1) {
                if (this.head === this.tail) {
                    this.head = null;
                    this.tail = null;
                } else {
                    let node = this.head;
                    while (node !== null) {
                        if (node.next === this.tail) {
                            break;
                        }
                        node = node.next;
                    }
                    node.next = null;
                    this.tail = node;
                }
            } else {
                let temp = this.head;
                let index = 0;
                while (index < location - 1) {
                    temp = temp.next;
                    index += 1;
                }
                temp.next = temp.next.next;
                if (temp.next === null) {
                    this.tail = temp;
                }
            }
            this.length--;
            
        }
        
    }
    /** This will delete the entire linked list
     * by setting the head and tail to null
    */
    deletell() {
        
        if (this.head === null) {
            console.log("The list is empty");
        } else {
            this.head = null;
            this.tail = null;
            this.length = 0;
        }
    }
    
    deleteDuplicate() {
        if (this.head === null) {
            console.log("The list is empty");
        } else {
            let temp = this.head;
            while (temp.next !== null) {
                if (temp.data === temp.next.data) {
                    temp.next = temp.next.next;
                } else {
                    temp = temp.next;
                }
            }
        }
        console.log("the lenght of the" + "  " +this.length);
    }
    
}
const linkedList = new LinkedList();
linkedList.insert(1, 0);
linkedList.insert(2, 1);
linkedList.insert(3, 2);
linkedList.insert(4, 3);
linkedList.insert(5, 4);
linkedList.insert(5, 5);
console.log("Original Linked List:");
linkedList.traveltheLL();
linkedList.delete(2);
console.log("\nLinked List after deleting element at location 2:");
linkedList.traveltheLL();
linkedList.insert(8,2)
console.log("\nLinked List after inserting  element at location 2:");
linkedList.traveltheLL();

linkedList.deleteDuplicate();
console.log("\nLinked List after deleting duplicates:");
linkedList.traveltheLL();
