import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import logo from './logo.svg';
import { Graphics } from 'pixi.js';
import './App.css';

const radians = (degrees) => degrees * (Math.PI / 180);

class App extends Component {
  componentWillMount() {
    //this.app = new window.PIXI.Application();
    this.renderer = new window.PIXI.autoDetectRenderer();
  }

  componentDidMount() {
    const { app, renderer } = this;
    //findDOMNode(this).appendChild(app.view);
    findDOMNode(this).appendChild(renderer.view);

    const { PIXI } = window;
    PIXI.loader.add('logo', './logo.svg').load((loader, resources) => {
      const logo = new PIXI.Sprite(resources.logo.texture);
      logo.x = renderer.width / 2;
      logo.y = renderer.height / 2;
      logo.anchor.x = 0.5;
      logo.anchor.y = 0.5;
      logo.width = 50;
      logo.height = 50;
      
      const stage = new window.PIXI.Container();
      stage.addChild(logo);

      renderer.render(stage);
      //app.stage.addChildAt(logo, 0);
      //app.stage.addChild(logo);
      //app.ticker.add(() => {
        //logo.rotation -= 0.02;
      //});
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
