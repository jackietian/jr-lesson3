// import React from 'react';

// const HerosElements = ['hero1', 'hero2', 'hero3', 'hero4'];

// function Heros() {
//   return (
//     <div>
//       {HerosElements.map((item, index) => {
//         return <h3 key={index}>{item.toString()}</h3>;
//       })}
//     </div>
//   )
// }

// export default Heros;


//list <ul><li>hero1</li><li>hero2</li></ul>

import React from 'react';

class HeroList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heros: ['hero1', 'hero2']
    }
  }

  render() {
    return (
      <ul>
        {this.state.heros.map(
          (item, index) => <li key={index}>{item}</li>
        )}
      </ul>
    )
  }
}

export default HeroList;