/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if (!this.root) return 0;

    let total = this.root.val;

    function recursiveAdd(node) {
      for (let child of node.children) {
        total += child.val;
        if (child.children.length > 0) {
          recursiveAdd(child);
        }
      }
    }

    recursiveAdd(this.root);
    return total;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (!this.root) return 0;

    let count = this.root.val % 2 === 0 ? 1 : 0;

    function recursiveCheck(node) {
      for (let child of node.children) {
        if (child.val % 2 === 0) {
          count++;
        }
        if (child.children.length > 0) {
          recursiveCheck(child);
        }
      }
    }

    recursiveCheck(this.root);
    return total;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (!this.root) return 0;

    let count = this.root.val > lowerBound ? 1 : 0;

    function recursiveCheck2(node) {
      for (let child of node.children) {
        if (child.val > lowerBound) {
          count++;
        }
        if (child.children.length > 0) {
          recursiveCheck2(child);
        }
      }
    }

    recursiveCheck2(this.root);
    return total;
  }
}

module.exports = { Tree, TreeNode };
