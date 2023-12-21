import React, { useState } from 'react';
import Block from './components/Block'
import SearchBar from './components/SearchBar';
import { addBlock, deleteBlock } from './data/blocks'
import { getBlocks } from './data/blocks';
import Banner from './components/Banner'
import banners from './data/banners';
import "./App.css";
import Modal, { getDescription, getThumbnail, getTitle } from './components/Modal';
function App() {
  const [blocks, setBlocks] = useState(getBlocks());
  const [searchText, setSearchText] = useState('');
  const [isModalVisible, setModalVisibility] = useState(false);
  const [file, setFile] = useState(null);
  const [warningText, setWarningText] = useState('');
  const filteredBlocks = blocks.filter((block)=>{
    return (block.title.includes(searchText)||block.description.includes(searchText)||block.description.includes('just an add block'));
  })
  const blockElements = filteredBlocks.map((block)=>{
    return <Block key={block.title+block.thumbnailUrl+block.description} block = {block} onBlockClick={onBlockClick} del={onDeleteClick}/>
  });

  function onAddButtonClick(){
    if(!file&&!getThumbnail())setWarningText("Pls add some File/Url")
    else if(!getTitle())setWarningText("Pls add title")
    else if(!getDescription())setWarningText("Pls add description")
    else{
      if(file){
        const newBlock = {
          title: getTitle(),
          thumbnailUrl: file.preview,
          description: getDescription()
        }
        setBlocks(addBlock(newBlock));
        setModalVisibility(false);
      }else{
        const newBlock = {
          title: getTitle(),
          thumbnailUrl: getThumbnail(),
          description: getDescription()
        }
        setBlocks(addBlock(newBlock));
        setModalVisibility(false);
      }
    
    }
  } 
  
  function onBlockClick(){
    setModalVisibility(true);
  }
  function onDeleteClick(title,url){
    console.log("before del");
    setBlocks(deleteBlock(title,url));
  }
  return (
    <div className="App">
      <header className="App-header">
        <h2>Gallery</h2>
      </header>
      <body>
        <div className= "App-nav">
          <SearchBar value={searchText} setSearchText={setSearchText}/>
        </div>
        <Banner banners={banners} setSearchText={setSearchText}/>
        <div className='App-grid'>
          {blockElements}
          <Modal isVisible={isModalVisible} onButtonClick={onAddButtonClick} file={file} setFile={setFile} warningText={warningText}/>
        </div>
      
      </body>
    </div>
  );
}
export default App;
