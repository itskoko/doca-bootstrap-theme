const React = require('react');
const ImmutablePropTypes = require('react-immutable-proptypes');
const Component = require('react-pure-render/component');
const Sidebar = require('./sidebar');
const Schema = require('./schema');

class App extends Component {

  static propTypes = {
    schemas: ImmutablePropTypes.list.isRequired,
    config: React.PropTypes.object,
  };

  render() {
    const { schemas, config } = this.props;
    const authentication_example = "curl -X POST 'https://api.koko.ai/track/content' \\ \n     -H 'Authorization: APIKEY' \\ \n     -d '{ \"id\": \"123\", \"created_at\": \"2016-08-29T09:12:33.001Z\", \"user_id\": \"123\", \"type\": \"post\", \"context_id\": \"123\", \"content_type\": \"text\", \"content\": { \"text\": \"Some UGC\" } }'"

    return (
      <div id="wrapper">
        <div id="page-content-wrapper">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <h1>{config.title}</h1>

                <article className="panel panel-primary">
                  <div className="panel-heading">
                    <div id='authentication' />
                    <h2>Authentication</h2>
                  </div>
                  <div className="panel-body">
                    <h4>Authentication is done via an API key provided to you and passed via an Authorization header</h4>
                    <div>
                      <div>
                        <h5>Example</h5>
                      </div>
                      <div>
                        <pre>{authentication_example}</pre>
                      </div>
                    </div>
                  </div>
                </article>

                <article className="panel panel-primary">
                  <div className="panel-heading">
                    <div id='errors' />
                    <h2>Errors</h2>
                  </div>
                  <div className="panel-body">
                    <h4>Koko uses conventional HTTP response codes to indicate the success or failure of an API request. In general, codes in the 2xx range indicate success, codes in the 4xx range indicate an error that failed given the information provided (e.g. content text was omitted), and codes in the 5xx range indicate an error with Koko's servers (these are rare).</h4>
                  </div>
                </article>
                {schemas
                  .filter(schema => !schema.get('hidden'))
                  .valueSeq()
                  .map(schema => <Schema key={schema.get('id')} schema={schema} />)
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

module.exports = App;
