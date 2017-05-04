import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import 'pixi.js';
import './App.css';
import logo from './logo.svg';

//const radians = (degrees) => degrees * (Math.PI / 180);
const { PIXI } = window;

class App extends Component {
  componentWillMount() {
    this.app = new window.PIXI.Application();
    this.renderer = new window.PIXI.autoDetectRenderer();
  }

  componentDidMount() {
    const { app, renderer } = this;
    findDOMNode(this).appendChild(app.view);

    PIXI.loader.add('yahi', './yahi.svg').load((loader, resources) => {
      const yahi = new PIXI.Sprite(resources.yahi.texture);
      yahi.x = renderer.width / 2;
      yahi.y = renderer.height / 2;
      yahi.anchor.x = 0.5;
      yahi.anchor.y = 0.5;
      yahi.width = 64;
      yahi.height = 64;
      app.stage.addChild(yahi);

      app.ticker.add(() => {
        yahi.rotation -= 0.02;
      });
    });


    //var arc = new Graphics();
    //arc.lineStyle(1, 0x221CE0, 1);
    //arc.beginFill(0xFFFFFF);
    //arc.arc(0, 0, 60, radians(135), radians(45));
    //arc.lineTo(0, 0);
    //arc.closePath();
    //arc.endFill();
    //arc.x = app.renderer.width / 2 - 120;
    //arc.y = app.renderer.height / 2 ;
    //app.stage.addChildAt(arc);
    //app.ticker.add(() => {
      ////arc.rotation += 0.05;
    //});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
