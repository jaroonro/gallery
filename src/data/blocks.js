let blocks = [
    {
        title: 'cat',
        thumbnailUrl:'/images/cat.png',
        description: 'A cat wearing cap/hat'
    },
    {
        title: 'cat2',
        thumbnailUrl:'/images/cat2.png',
        description: 'A cat wearing headphone'
    },
    {
        title: 'cat3',
        thumbnailUrl:'/images/cat3.png',
        description: 'A cat wearing beret/hat holding a shotgun'
    },
    {
        title: 'smurf-cat',
        thumbnailUrl:'/images/smurfcat.png',
        description: 'we live we love we lie'
    },
    {
        title: 'dog',
        thumbnailUrl:'/images/dog.png',
        description: 'dog/doge/shiba'
    },
    {
        title: 'Add',
        thumbnailUrl:'/images/plus.png',
        description: 'just an add block'
    }
]
export function addBlock(newBlock){
    blocks.pop()
    blocks = [...blocks,newBlock];
    let lastBlock = {
        title: 'Add',
        thumbnailUrl: '/images/plus.png',
        description: 'just an add block'
    }
    blocks = [...blocks,lastBlock];
    console.log('Updated Blocks:', blocks);
    return blocks;
}
export function getBlocks(){
    return blocks;
}
export function deleteBlock(title,url){
    console.log("deleting", title , url)
    const delIndex = blocks.findIndex(block => {
        return block.title === title &&
        block.thumbnailUrl === url;
    });
    const ublock = [...blocks];
    if(delIndex!== -1){
    
    ublock.splice(delIndex, 1);
    }
    console.log(blocks);
    blocks = [...ublock];
    return ublock;
}
export default blocks;