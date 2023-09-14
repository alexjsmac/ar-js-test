import {Entity, Scene} from 'aframe-react';
import Head from 'next/head';
import '@ar-js-org/ar.js'

function DefaultScene() {
  return (
    <Scene embedded arjs>
      <a-assets>
        <audio src="https://cdn.aframe.io/basic-guide/audio/backgroundnoise.wav" preload="auto"></audio>
      </a-assets>
      <a-marker preset="hiro">
        <Entity
          position="0 0 0"
          scale="0.05 0.05 0.05"
          gltf-model="https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/scene.gltf"
        ></Entity>
      </a-marker>
      <Entity camera></Entity>
    </Scene>
  );
}

export default function HomePage() {
  return (
    <div style={{height: '100%', width: '100%'}}>
      <Head>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>AR Soundwalk</title>
      </Head>
      <div>
        <DefaultScene/>
      </div>
    </div>
  );
}