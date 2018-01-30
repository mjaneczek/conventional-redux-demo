import React from 'react';
import { connectInteractors } from 'conventional-redux';
import LoadingIndicator from 'components/LoadingIndicator';

const GitHubRepos = (p,d) => <div>
  <h3>GitHub username</h3>
  <input className="form-control form-control-sm mb-2" onChange={e => d('github:setUsername', e.target.value)} value={p('github.username')} onKeyPress={(e) => {(e.key === 'Enter' ? d('github:fetch') : null)}} type="text" />

  <button className="btn btn-primary mt-2" onClick={() => d('github:fetch')}>
    Fetch
  </button>

  {p('github.loading') == true && <LoadingIndicator /> }

  {p('github.loading') == false && <div className="mt-4">

    {p('github.error') && <div className="alert alert-dismissible alert-warning">
      <h4 className="alert-heading">Warning!</h4>
      <p className="mb-0">{p('github.error')}</p>
    </div>}

    <div className="list-group">
      {p('github.repos').map(repo => <div className="list-group-item list-group-item-action flex-column align-items-start">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">{repo.name}</h5>
          <small className="text-muted">{repo.language}</small>
        </div>
        <p className="mb-1">{repo.description}</p>
      </div>)}
    </div>

  </div>}


</div>

export default connectInteractors(GitHubRepos, ['github']);
