/* eslint global-require: 0 */

const React = require('react');
const ImmutablePropTypes = require('react-immutable-proptypes');
const Component = require('react-pure-render/component');

class Definition extends Component {

  static propTypes = {
    definitions: ImmutablePropTypes.map,
  };

  state = {
    showDefinition: false,
  };

  handleToggle = () => {
    this.setState(prevState => ({
      showDefinition: !prevState.showDefinition,
    }));
  };

  renderDefTable(definitions) {
    const ObjectDefinitionTable = require('./objectDefinitionTable');
    return <ObjectDefinitionTable definitions={definitions} />;
  }

  render() {
    const { definitions } = this.props;
    const { showDefinition } = this.state;

    return (
      <div>
        {this.renderDefTable(definitions)}
      </div>
    );
  }

}

module.exports = Definition;
