class MerkleTree {
    constructor(leaves, concat) {
        this.root = null;
        this.leaves = leaves;
        this.hash = concat;
    }

    getRoot() {
        let arr = [...this.leaves];

        while (arr.length !== 1) {
            arr = this.getNextLayer(arr)
        }

        this.root = arr[0];
        
        return this.root;
    }


    getNextLayer(arr) {
        let newArr = [];
        for (let i = 0; i < arr.length; i++) {
            if (i % 2 !== 0) {
                newArr.push(this.hash(arr[i - 1], arr[i]));
            } 
        }

        return newArr;
    }
}

module.exports = MerkleTree;