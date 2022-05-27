import React from 'react';
import Banner from './Banner';
import BestSellers from './BestSellers';
import DownloadApp from './DownloadApp';

const Home = () => {
    return (
        <div className='container'>
            <Banner></Banner>
            <BestSellers></BestSellers>
            <DownloadApp></DownloadApp>
        </div>
    );
};

export default Home;