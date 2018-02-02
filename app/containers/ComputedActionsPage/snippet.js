export default
`// component
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

// connect method
export default connectInteractors(GitHubRepos, ['github', 'filter']);

// interactors
class GitHubInteractor {
  defaultState() {
    return fromJS({ username: 'mjaneczek', repos: [], allRepos: [], error: null, loading: false });
  }

  computedActions() {
    return [
      { after: ['github:fetchSuccess', 'filter:setCurrent'], dispatch: 'github:filterRepos', with: ['filter.current'] },
    ]
  }

  onFilterRepos(currentFilter) {
    if(!currentFilter) {
      return this.state.set('repos', this.state.get('allRepos'));
    }

    const filteredRepos = this.state.get('allRepos').filter((repo) => repo.language == currentFilter.value)
    return this.state.set('repos', filteredRepos)
  }

  // fetch and other basic methods...
}

class FilterInteractor {
  defaultState() {
    return fromJS({ current: null, options: [
      {label: 'Ruby', value: 'Ruby'},
      {label: 'JavaScript', value: 'JavaScript'},
      {label: 'Scala', value: 'Scala'}
    ]});
  }

  onSetCurrent(value) {
    return this.state.set('current', value)
  }
}`
