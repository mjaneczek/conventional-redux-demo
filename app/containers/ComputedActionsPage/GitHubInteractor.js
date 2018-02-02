import { fromJS } from 'immutable';
import request from 'utils/request';

export default class GitHubInteractor {
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

  fetch() {
    return request(`https://api.github.com/users/${this.p('github.username')}/repos`)
  }

  onFetch() {
    return this.state.set('loading', true).set('error', null).set('allRepos', [])
  }

  onFetchSuccess(repos) {
    return this.state.set('loading', false).set('allRepos', repos)
  }

  onFetchError(error) {
    return this.state.set('loading', false).set('error', error.message)
  }

  onSetUsername(username) {
    return this.state.set('username', username)
  }
}
