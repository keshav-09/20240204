/**Implementation of Binary Search Tree in Javascript
 * @author keshav
 */

/**
 * This is the node class to crete a node with data
 */
class Node {
    constructor(data) {
    /**
     * Create a Node.
     * @param {*} data - The data to be stored in the Node.
     */
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
/**
 * Here is the Binary Search tree class
 */

class BinaryTree {
    /**
     * Create a Binary Tree.
     * @constructor
     */
    constructor() {
        // root of theBina ry Search tree  
        this.root = null;
    }
   

    insert(data) {
    /**
     * Insert data into the Binary Tree.
     * @param {*} data - The data to be inserted.
     */
        var newNode = new Node(data);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }
    /**Insert a Node into the Binary Tree.
     * @private
     * @param {Node} node - The current node 
     * @param {Node} newNode - The new Node to be inserted.
     */

    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }
    /**
     * Remove data from the Binary Tree.
     * @param {*} data - The data to be removed.
     */

    remove(data) {
        this.root = this.removeNode(this.root, data);
    }
    /**
     * Remove a Node from the Binary Tree.
     * @private
     * @param {Node} node - The current node that has been check.
     * @param {*} key - The data of the node to be removed.
     * @returns {Node} - The updated root node.
     */

    removeNode(node, key) {
        if (node === null) {
            return null;
        } else if (key < node.data) {
            node.left = this.removeNode(node.left, key);
            return node;
        } else if (key > node.data) {
            node.right = this.removeNode(node.right, key);
            return node;
        } else {
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            } else if (node.left === null) {
                node = node.right;
                return node;
            } else if (node.right === null) {
                node = node.left;
                return node;
            } else {
                var aux = this.findMinNode(node.right);
                node.data = aux.data;
                node.right = this.removeNode(node.right, aux.data);
                return node;
            }
        }
    }
    /**
     * Inorder traversal of the Binary Tree.
     * @param {Node} node - The current node that has been check
     */
    inorder(node) {
        if (node !== null) {
            this.inorder(node.left);
            console.log(node.data);
            this.inorder(node.right);
        }
    }
    /**
     * preorder traversal of the Binary Tree.
     * @param {Node} node - The current node that has been check
     */
    preorder(node) {
        if (node !== null) {
            console.log(node.data);
            this.preorder(node.left);
            this.preorder(node.right);
        }
    }
    /**
     * postorder traversal of the Binary Tree.
     * @param {Node} node - The current node that has been check
     */

    postorder(node) {
        if (node !== null) {
            this.postorder(node.left);
            this.postorder(node.right);
            console.log(node.data);
        }
    }
    /**
     * Find the minimum node in the Binary Tree.
     * @param {Node} node - The current node being evaluated.
     * @returns {Node} - The minimum node.
     */
    findMinNode(node) {
        if (node.left === null) {
            return node;
        } else {
            return this.findMinNode(node.left);
        }
    }
    /**
     * Get the root node of the BT
     * @returns {Node} - The root node.
     */

    getRootNode() {
        return this.root;
    }
    /**
     * Search for a node with a specific data value in the Binary Tree.
     * @param {Node} node - The current node being evaluated.
     * @param {*} data - The data value to search in BT
     * @returns {Node|null} - The node with the specified data value or null if not found.
     */

    search(node, data) {
        if (node === null) {
            return null;
        } else if (data < node.data) {
            return this.search(node.left, data);
        } else if (data > node.data) {
            return this.search(node.right, data);
        } else {
            return node;
        }
    }
}

var BST = new BinaryTree();
BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(5);
BST.insert(9);
BST.insert(27);

var root = BST.getRootNode();

console.log("Inorder traversal:");
BST.inorder(root);

BST.remove(5);
console.log("Inorder traversal after removing 5:");
BST.inorder(root);

BST.remove(7);
console.log("Inorder traversal after removing 7:");
BST.inorder(root);

BST.remove(15);
console.log("Inorder traversal after removing 15:");
BST.inorder(root);

console.log("Preorder traversal:");
BST.preorder(root);

console.log("Postorder traversal:");
BST.postorder(root);
