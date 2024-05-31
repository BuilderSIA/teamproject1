import React from 'react';

const Home = () => {
    const getRandomImageId = () => Math.floor(Math.random() * 1084); // Rasm identifikatori 0 dan 1084 gacha bo'lgan tasodifiy son

    return (
        <div className='main'>
            <img src={`https://picsum.photos/id/${getRandomImageId()}/200/300`} alt={`Image ${getRandomImageId()}`} />
            <img src={`https://picsum.photos/id/${getRandomImageId()}/200/300`} alt={`Image ${getRandomImageId()}`} />
            <img src={`https://picsum.photos/id/${getRandomImageId()}/200/300`} alt={`Image ${getRandomImageId()}`} />
            <img src={`https://picsum.photos/id/${getRandomImageId()}/200/300`} alt={`Image ${getRandomImageId()}`} />
            <img src={`https://picsum.photos/id/${getRandomImageId()}/200/300`} alt={`Image ${getRandomImageId()}`} />
            <img src={`https://picsum.photos/id/${getRandomImageId()}/200/300`} alt={`Image ${getRandomImageId()}`} />
            <img src={`https://picsum.photos/id/${getRandomImageId()}/200/300`} alt={`Image ${getRandomImageId()}`} />
            <img src={`https://picsum.photos/id/${getRandomImageId()}/200/300`} alt={`Image ${getRandomImageId()}`} />
            <img src={`https://picsum.photos/id/${getRandomImageId()}/200/300`} alt={`Image ${getRandomImageId()}`} />
            <img src={`https://picsum.photos/id/${getRandomImageId()}/200/300`} alt={`Image ${getRandomImageId()}`} />
            <img src={`https://picsum.photos/id/${getRandomImageId()}/200/300`} alt={`Image ${getRandomImageId()}`} />
            <img src={`https://picsum.photos/id/${getRandomImageId()}/200/300`} alt={`Image ${getRandomImageId()}`} />
        </div>
    );
}

export default Home;
