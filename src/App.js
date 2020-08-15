import React,{Component} from 'react';
import Particles from 'react-particles-js';
import './css/styling.css';
import 'antd/dist/antd.css';
import { Input, message } from 'antd';
const { Search } = Input;
// eslint-disable-next-line 
import { DownOutlined } from '@ant-design/icons';
// eslint-disable-next-line 
import Levels from './Levels';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      APIkey: '7cd0efcf3493c7a35220edf9ae9c9a5accf57e93',
      AQI: 0,
      city: 'Los Angeles',
      level: '',
      color: '',
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.calculateLevel = this.calculateLevel.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData(this.state.city);
    }

    handleSearch(value) {
      this.fetchData(value);
    }

    calculateLevel(AQI) {
        if(this.state.AQI < 51) {
          this.setState({
            level: 'Good',
            color: 'rgb(45, 217, 2)',
          });
        }
        else if(this.state.AQI < 101) {
          this.setState({
            level: 'Moderate',
            color: 'rgb(224, 209, 0)',
          });
        }
        else if(this.state.AQI < 151) {
          this.setState({
            level: 'Unhealthy for Sensitive Groups',
            color: 'rgb(235, 111, 9)',
          });
        }
        else if(this.state.AQI < 201) {
          this.setState({
            level: 'Unhealthy',
            color: 'rgb(255,0,0)',
          });
        }
        else if(this.state.AQI < 301) {
          this.setState({
            level: 'Very unhealthy',
            color: 'rgb(128,0,128)',
          });
        }
        else {
          this.setState({
            level: 'Hazardous',
            color: 'rgb(128,0,0)',
          });
        }
      }

  fetchData(value) {
    if(value.trim() !== '') {
      fetch(`https://api.waqi.info/feed/${value}/?token=${this.state.APIkey}`)
      .then(res => res.json())
      .then(
        (result) => {
          if(result.status === 'ok') {
            this.setState({
              AQI: result.data.aqi,
              city: value.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()})
            });
            this.calculateLevel(result.data.aqi);
          }
          else {
            message.error('Data not found.');
          }
        })
      }

  }

  render() {
    return (
      <div>
          <div className="topBar">
            REAL TIME AIR QUALITY INDEX
          </div>
        <div className="infoDiv">
          <div className="infoDivInner">
            <h1 className="heading">Compare Air Pollution Levels In Cities, Real Time Air Quality Info.</h1>
            <h5>Made by Grigory Volkov</h5>
            <h2 className="text">
              This website is made to help you compare air pollution levels in different cities.
              The floating particles in the background visualize AQI (Air Quality Index) of each city.
            </h2>
            <div className="searchDiv">
              <div className="resultsDiv">
                This is air pollution in <span className="cityName">{this.state.city}</span> right now.
                The AQI is <span style={{color: this.state.color}}>{this.state.AQI}</span>, a level that is considered to be &nbsp;
                <span style={{background: this.state.color,
                padding: '2px'
              }}>{this.state.level}</span>
              </div>
            </div>
            <Search
              autoFocus
              size="large"
              placeholder="Write city name"
              onSearch={value => this.handleSearch(value)}
              className='search'
            />
            <div className="arrowDownDiv">
              <DownOutlined className="arrowDown" />
            </div>
            <Levels/>
          </div>
        </div>
        <Particles className="particles" params={{
          "particles": {
            "number": {
              "value": this.state.AQI,
              "density": {
                "enable": true,
                "value_area": 600
              }
            },
            "color": {
              "value": "#000000"
            },
            "shape": {
              "type": "circle",
              "stroke": {
                "width": 0,
                "color": "#000000"
              },
              "polygon": {
                "nb_sides": 5
              },
              "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
              }
            },
            "opacity": {
              "value": 0.3,
              "random": false,
              "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
              }
            },
            "size": {
              "value": 9,
              "random": true,
              "anim": {
                "enable": false,
                "speed": 4,
                "size_min": 0.1,
                "sync": false
              }
            },
            "line_linked": {
              "enable": false,
              "distance": 150,
              "color": "#ffffff",
              "opacity": 0.4,
              "width": 1
            },
            "move": {
              "enable": true,
              "speed": 2.5,
              "direction": "none",
              "random": false,
              "straight": false,
              "out_mode": "out",
              "bounce": false,
              "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
              }
            }
          },
          "interactivity": {
            "detect_on": "canvas",
            "events": {
              "onhover": {
                "enable": false,
                "mode": "repulse"
              },
              "onclick": {
                "enable": false,
                "mode": "push"
              },
              "resize": true
            },
            "modes": {
              "grab": {
                "distance": 400,
                "line_linked": {
                  "opacity": 1
                }
              },
              "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
              },
              "repulse": {
                "distance": 200,
                "duration": 0.4
              },
              "push": {
                "particles_nb": 4
              },
              "remove": {
                "particles_nb": 2
              }
            }
          },
          "retina_detect": true
}} />
      </div>
    );
  }
}

export default App;
