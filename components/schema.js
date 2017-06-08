const React = require('react');
const Endpoint = require('./endpoint');
const ObjectDefinitionTable = require('./objectDefinitionTable');
const MarkdownPreview = require('react-marked-markdown').MarkdownPreview;
const ImmutablePropTypes = require('react-immutable-proptypes');
const Component = require('react-pure-render/component');
const ExampleObject = require('./exampleObject');

class Schema extends Component {

  static propTypes = {
    schema: ImmutablePropTypes.map.isRequired,
  };

  state = {
    showDefinition: false,
  };

  handleToggle = () => {
    this.setState(prevState => ({
      showDefinition: !prevState.showDefinition,
    }));
  };

  render() {
    const { schema } = this.props;
    const { showDefinition } = this.state;
    return (
      <article className="panel panel-primary">
        <div className="panel-heading">
          <div id={schema.get('html_id')} />
          <h2>{schema.get('title')}</h2>
        </div>
        <div className="list-group">
          {schema
            .get('links')
            .filter(link => !link.get('private'))
            .valueSeq()
            .map(link => <Endpoint key={link.get('html_id')} link={link} />)
          }
        </div>
      </article>
    );
  }

}

module.exports = Schema;
