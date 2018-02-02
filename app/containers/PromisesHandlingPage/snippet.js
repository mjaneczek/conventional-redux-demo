export default
`// component
const GitHubRepos = (p,d) => <div>
  <h3>GitHub username</h3>
  <Input value={p('github.username')} onChange={value => d('github:setUsername', value)} onEnter={() => d('github:fetch')} />

  <button onClick={() => d('github:fetch')}>
    Fetch
  </button>

  {p('github.loading') == true && <LoadingIndicator /> }

  {p('github.loading') == false && <div>
    {p('github.error') && <Alert message={p('github.error')} /> }

    <ListGroup>
      {p('github.repos').map(repo => <ListGroupItem name={repo.name} tag={repo.language} description={repo.description} />)}
    </ListGroup>
  </div>}
</div>

// connect method
export default connectInteractors(GitHubRepos, ['github']);

// interactor
export default class GitHubInteractor {
  defaultState() {
    return fromJS({ username: 'mjaneczek', repos: [], error: null, loading: false });
  }

  fetch() {
    return request(\`https://api.github.com/users/\${this.p('github.username')}/repos\`)
  }

  onFetch() {
    return this.state.set('loading', true).set('error', null).set('repos', [])
  }

  onFetchSuccess(repos) {
    return this.state.set('loading', false).set('repos', repos)
  }

  onFetchError(error) {
    return this.state.set('loading', false).set('error', error.message)
  }

  onSetUsername(username) {
    return this.state.set('username', username)
  }
}`
