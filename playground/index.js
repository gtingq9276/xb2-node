const book={
    title:'把书送给加西亚',
    author:'哈伯德',
    toString(){
        return `《${this.title}》,作者:${this.author}`
    }
};

console.log(book.toString()+'\n');

const {title,author} = book;

console.log(`《${title}》,作者:${author}`);
