import "./Block.css"
import { useState } from 'react';

function Block(props){
    const {block,onBlockClick} = props;
    const [isShow, setShow] = useState(false);
    function toggleDescription(){
        setShow(!isShow);
    }
    if(block.title!=='Add'){
        if(!isShow)
        return(
            <div className='Block'>
                <img className='img' alt={block.title} src={block.thumbnailUrl} onClick={toggleDescription}/>
                <h4>{block.title}</h4>
            </div>
        )
        return(
            <div className='Block'>
                <img className='cover' alt={block.title} src={block.thumbnailUrl} onClick={toggleDescription}/>
                <div className='description' onClick={toggleDescription}>
                    <h3>Description:</h3>
                    <p>{block.description}</p>
                    
                </div>
                <h4>{block.title}</h4>
            </div>
        )
    }
    return(
        
        <div className='Block'>
            <img className='img' alt={block.title} src={block.thumbnailUrl} id="add" onClick={onBlockClick}/>
            <h4>{block.title}</h4>
        </div>
    )
};

export default Block;