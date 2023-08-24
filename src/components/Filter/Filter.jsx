import PropTypes from 'prop-types';

// export class FilterClass extends Component {
//   static propTypes = {
//     onFilter: PropTypes.func.isRequired,
//     filter: PropTypes.string,
//   };

//   render() {
//     const { filter, onFilter } = this.props;

//     return (
//       <label>
//         Find contacts by name
//         <input type="text" onChange={onFilter} value={filter} />
//       </label>
//     );
//   }
// }

export const Filter = ({onFilter, filter}) => {

    return (
      <label>
        Find contacts by name
        <input type="text" onChange={onFilter} value={filter} />
      </label>
    );
}

Filter.propTypes = {
    onFilter: PropTypes.func.isRequired,
    filter: PropTypes.string,
  };