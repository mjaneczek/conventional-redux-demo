import React from 'react';
import Select from 'react-select';
import { connectInteractors } from 'conventional-redux';
import Alert from 'components/Alert';
import LoadingIndicator from 'components/LoadingIndicator';
import ListGroup from 'components/ListGroup';
import ListGroupItem from 'components/ListGroupItem';
import Input from 'components/Input';

const GitHubRepos = (p,d) => <div>
  <h3>GitHub username</h3>
  <Input value={p('github.username')} onChange={value => d('github:setUsername', value)} onEnter={() => d('github:fetch')} />

  <button className="btn btn-primary mt-4 mb-4" onClick={() => d('github:fetch')}>
    Fetch
  </button>

  <div className="form-group">
    <label>Language filter</label>
    <Select
      placeholder="Select filter..."
      value={p('filter.current')}
      onChange={(v) => d('filter:setCurrent', v)}
      options={p('filter.options').toJS()}
    />
  </div>

  {p('github.loading') == true && <LoadingIndicator /> }

  {p('github.loading') == false && <div>
    {p('github.error') && <Alert message={p('github.error')} /> }

    <ListGroup>
      {p('github.repos').map(repo => <ListGroupItem key={repo.id} name={repo.name} tag={repo.language} description={repo.description} />)}
    </ListGroup>
  </div>}
</div>

export default connectInteractors(GitHubRepos, ['github', 'filter']);
