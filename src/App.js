// import React from 'react';
// import Potato from "./potato";
//
// const foodILike = [
//     {
//         id: 1,
//         name: "Kimchi",
//         rate: 3,
//         image:
//             "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg"
//     },
//     {
//         id: 2,
//         name: "Samgyeopsal",
//         rate: 5,
//         image:
//             "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg"
//     },
//     {
//         id: 3,
//         name: "Bibimbap",
//         rate: 2.6,
//         image:
//             "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb"
//     },
//     {
//         id: 4,
//         name: "Doncasu",
//         rate: 5,
//         image:
//             "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg"
//     },
//     {
//         id: 5,
//         name: "Kimbap",
//         rate: 3.5,
//         image:
//             "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg"
//     }
// ];
//
// function App() {
//   return (
//     <div>
//       <h1>jimin app</h1>
//         {foodILike.map(dish => (
//             <Potato
//                 key={dish.id}
//                 name={dish.name}
//                 image={dish.image}
//                 rate={dish.rate}
//             />
//         ))}
//     </div>
//   );
// }
//
// export default App;

//rcc
import React, {Component} from 'react';

class App extends Component {
    //상태나 함수 선언분 부분.
    state = {
        count: 0
    };

    add = () => {
        //console.log("add");
        this.setState(current => ({count: current.count + 1}));
    };

    minus = () => {
        //console.log("minus");
        this.setState(current => ({count: current.count - 1}));
    };

    // Life Cycle 함수.
    componentDidMount() {
        console.log('componentDidMount')
    }

    componentDidUpdate() {
        console.log('componentDidUpdate')
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    render() {
        //리턴에서 사용될 상태나 함수를 재선언해주는 부분.
        return ( //실질적 html
            <div>
                <h1>The number is: {this.state.count}</h1>
                <button onClick={this.add}>Add</button>
                <button onClick={this.minus}>Minus</button>
            </div>
        );
    }
}

export default App;